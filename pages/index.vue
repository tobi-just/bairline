<template>
  <v-container fluid class="ma-0 pa-0">
    <v-row class="ma-0 pa-0">
      <v-img
        class="align-stretch background"
        height="100vh"
        src="/images/cockpit.jpg"
        cover
      >
        <div class="mobile-logo">
          <BairlineLogo />
        </div>
        <v-row align="end" justify="center" class="fill-height">
          <v-col class="text-center introduction" cols="10" ref="introEl">
            <h1 class="text-h2" style="font-weight: 300 !important;">Enjoy the difference</h1>
          </v-col>
          <v-col
            class="text-center clickable"
            cols="12"
            ref="exploreEl"
            @click="scrollToIntro"
          >
            <h3>Explore</h3>
            <div class="bounce">
              <v-icon size="large">mdi-chevron-down</v-icon>
            </div>
          </v-col>
        </v-row>
      </v-img>
    </v-row>
    <IntroSection />
    <PromisesSection />
    <FleetSection />
  </v-container>
</template>

<script setup lang="ts">
const introEl = ref<InstanceType<typeof HTMLElement> | null>(null)
const exploreEl = ref<InstanceType<typeof HTMLElement> | null>(null)

function scrollToIntro() {
  const start = window.scrollY
  const end = window.innerHeight
  const duration = 2500
  const startTime = performance.now()

  function step(currentTime: number) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const ease = progress < 0.5
      ? 2 * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 2) / 2
    window.scrollTo(0, start + (end - start) * ease)
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

function handleScroll() {
  const currentScroll = window.pageYOffset
  const opacity = currentScroll <= window.innerHeight
    ? String(1 - currentScroll / window.innerHeight)
    : '0'
  const introDiv = introEl.value?.$el ?? introEl.value
  const exploreDiv = exploreEl.value?.$el ?? exploreEl.value
  if (introDiv) introDiv.style.opacity = opacity
  if (exploreDiv) exploreDiv.style.opacity = opacity
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.background :deep(.v-img__img) {
  filter: brightness(30%) !important;
}

.introduction {
  transform: translateY(20vh);
}
.mobile-logo {
  display: none;
}

@media (max-width: 1024px) {
  .mobile-logo {
    display: block;
    position: absolute;
    top: 30%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    width: 80%;
    max-width: 480px;
    margin: 0 auto;
    z-index: 2;
  }

  .introduction {
    transform: none;
  }

  .introduction .text-h2 {
    font-size: 2.5rem !important;
  }
}
</style>
