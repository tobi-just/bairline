<template>
  <v-container fluid class="ma-0 pa-0">
    <v-row class="ma-0 pa-0">
      <v-img
        class="align-stretch background"
        height="100vh"
        src="/images/cockpit.jpg"
        cover
      >
        <v-row align="end" justify="center" class="fill-height">
          <v-col class="text-center introduction" cols="10" ref="introRef">
            <h1 class="text-h2" style="font-weight: 300 !important;">Enjoy the difference</h1>
          </v-col>
          <v-col
            class="text-center clickable"
            cols="12"
            ref="exploreRef"
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
const introRef = ref<HTMLElement | null>(null)
const exploreRef = ref<HTMLElement | null>(null)

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
  let opacity = 1
  if (currentScroll <= window.innerHeight) {
    opacity = 1 - currentScroll / window.innerHeight
  } else {
    opacity = 0
  }
  if (introRef.value) introRef.value.style.opacity = String(opacity)
  if (exploreRef.value) exploreRef.value.style.opacity = String(opacity)
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
</style>
