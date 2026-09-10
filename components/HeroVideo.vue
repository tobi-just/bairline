<template>
  <div class="hero-video" :style="{ height: '80vh' }">
    <video
      ref="videoEl"
      class="hero-video__bg"
      :poster="poster"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
    />

    <div class="hero-video__overlay" />
    <v-container class="hero-video__content fill-height">
      <v-row align="center" class="text-left">
        <v-col cols="10" sm="8" md="5" offset="1" offset-md="2">
          <h1 class="hero-title my-8">
            <slot />
          </h1>
          <v-btn
            v-if="scrollTarget"
            size="x-large"
            variant="outlined"
            @click="scrollTo"
          >
            Learn more
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  src: string
  mobileSrc?: string
  poster?: string
  scrollTarget?: string
}>()

const videoEl = ref<HTMLVideoElement | null>(null)

onMounted(() => {
  const v = videoEl.value
  if (!v) return

  // On a metered / very slow connection, don't pull the clip at all —
  // the poster image already fills the hero.
  const conn = (navigator as any).connection
  if (conn && (conn.saveData || /(^|-)2g$/.test(conn.effectiveType || ''))) return

  // Small phones get the light-weight encode; everything else the full one.
  const useMobile = props.mobileSrc && window.matchMedia('(max-width: 767px)').matches
  v.src = useMobile ? (props.mobileSrc as string) : props.src

  v.load()
  const kick = () => { v.play().catch(() => {}) }
  kick()
  v.addEventListener('loadeddata', kick, { once: true })
})

function scrollTo() {
  if (props.scrollTarget) {
    document.querySelector(props.scrollTarget)?.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style lang="scss" scoped>
.hero-video {
  position: relative;
  overflow: hidden;

  &__bg {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    transform: translate(-50%, -50%);
    object-fit: cover;
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #2a4ae430, #29323c);
  }

  &__content {
    position: relative;
    z-index: 1;
  }
}

.hero-title {
  font-size: clamp(2rem, 8vw, 5rem) !important;
  line-height: 1.1;
  text-transform: uppercase;
  text-shadow: 1px 1px black;
}
</style>
