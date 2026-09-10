<template>
  <div class="hero-video" :style="{ height: '80vh' }">
    <video
      ref="videoEl"
      class="hero-video__bg"
      :src="src"
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
  scrollTarget?: string
}>()

const videoEl = ref<HTMLVideoElement | null>(null)

// Ask the browser to start fetching the clip as early as possible.
useHead({
  link: [{ rel: 'preload', as: 'video', href: props.src, type: 'video/mp4' }],
})

onMounted(() => {
  const v = videoEl.value
  if (!v) return
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
