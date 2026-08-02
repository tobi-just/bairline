<template>
  <v-app>
    <ClientOnly>
      <AppHeaderMobile v-if="mobile" />
      <AppHeader v-else />
    </ClientOnly>

    <v-main class="pt-0">
      <slot />
    </v-main>

    <div
      v-if="!mobile && mounted"
      ref="logoWrapperEl"
      class="bairline-logo"
      :class="{
        'bairline-logo--home': route.path === '/',
        'bairline-logo--nav': route.path !== '/',
      }"
    >
      <NuxtLink to="/" aria-label="Bairline">
        <BairlineLogo />
      </NuxtLink>
    </div>

    <AppFooter />
  </v-app>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'

const route = useRoute()
const { mdAndDown: mobile } = useDisplay()
const logoWrapperEl = ref<HTMLElement | null>(null)
const mounted = ref(false)

function handleScroll() {
  if (!logoWrapperEl.value || route.path !== '/') return
  const scrollY = Math.max(0, window.scrollY)
  const vh = window.innerHeight
  const progress = Math.min(scrollY / vh, 1)

  if (mobile.value) return

  const scaleValue = 1 - progress * 0.55
  const finalMoveUp = progress * vh * 0.3
  const extraScroll = scrollY > vh ? scrollY - vh : 0
  const moveUp = finalMoveUp + extraScroll

  if (scrollY <= 0) {
    logoWrapperEl.value.style.transform = `translate(-50%, -50%)`
  } else {
    logoWrapperEl.value.style.transform = `translate(-50%, calc(-50% - ${moveUp}px)) scale(${scaleValue})`
  }
}

watch(() => route.path, (newPath) => {
  if (!logoWrapperEl.value) return
  logoWrapperEl.value.style.transform = ''
  logoWrapperEl.value.style.opacity = ''
})

onMounted(() => {
  mounted.value = true
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

useHead({
  titleTemplate: (title) => {
    if (route.path === '/') return 'Bairline Fluggesellschaft'
    return title ? `${title} | Bairline Fluggesellschaft` : 'Bairline Fluggesellschaft'
  },
})
</script>

<style lang="scss">
.bairline-logo {
  position: fixed;
  pointer-events: none;
  z-index: 100;
  opacity: 0;

  &--home {
    top: 40%;
    left: 50%;
    width: 100%;
    max-width: 2000px;
    transform: translate(-50%, -50%);
    pointer-events: auto;
    opacity: 1;
  }

}

@keyframes intoBackground {
  0% { z-index: 100; }
  99% { z-index: 100; }
  100% { z-index: -1; }
}
</style>
