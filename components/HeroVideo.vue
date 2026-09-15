<template>
  <div class="hero-video" :style="{ height: '80vh' }">
    <video
      ref="videoEl"
      class="hero-video__bg"
      :src="resolvedSrc"
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
            color="white"
            variant="text"
            rounded="pill"
            class="hero-cta"
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

// Decide phone vs. full clip on the server from the UA, so the right file is
// already in the initial HTML and the browser starts fetching it during parse
// (not after hydration).
const ua = import.meta.server
  ? (useRequestHeaders(['user-agent'])['user-agent'] || '')
  : navigator.userAgent
const isPhone = /Android.+Mobile|iPhone|iPod|Windows Phone|BlackBerry|Opera Mini/i.test(ua)
const resolvedSrc = computed(() =>
  isPhone && props.mobileSrc ? props.mobileSrc : props.src,
)

// Nudge the browser to fetch the clip as early as possible.
useHead({
  link: [{ rel: 'preload', as: 'video', href: resolvedSrc.value, fetchpriority: 'high' }],
})

onMounted(() => {
  const v = videoEl.value
  if (!v) return

  // On a metered / very slow connection, drop the clip — the poster already
  // fills the hero.
  const conn = (navigator as any).connection
  if (conn && (conn.saveData || /(^|-)2g$/.test(conn.effectiveType || ''))) {
    v.removeAttribute('src')
    v.load()
    return
  }

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

/* Frosted-glass CTA to match the Contact/Offer pages' pill buttons. */
.hero-cta {
  height: 60px;
  padding-inline: 2.75rem;
  font-size: 1.05rem;
  letter-spacing: 0.14em;
  background-color: rgba(17, 22, 28, 0.3) !important;
  border: 1px solid rgba(255, 255, 255, 0.28);
  backdrop-filter: blur(10px) saturate(150%);
  -webkit-backdrop-filter: blur(10px) saturate(150%);
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

.hero-cta:hover {
  background-color: rgba(17, 22, 28, 0.44) !important;
  border-color: rgba(255, 255, 255, 0.45);
}
</style>
