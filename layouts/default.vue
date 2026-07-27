<template>
  <v-app>
    <AppHeaderMobile v-if="mobile" />
    <AppHeader v-else />

    <v-main class="pt-0">
      <slot />
    </v-main>

    <div
      ref="logoWrapperEl"
      class="bairline-logo"
      :class="{
        'bairline-logo--home': route.path === '/',
        'bairline-logo--nav': !mobile && route.path !== '/',
        'bairline-logo--nav--mobile': mobile && route.path !== '/',
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

function handleScroll() {
  if (!logoWrapperEl.value || route.path !== '/') return
  const scrollY = Math.max(0, window.scrollY)
  const vh = window.innerHeight
  const progress = Math.min(scrollY / vh, 1)

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

onMounted(() => window.addEventListener('scroll', handleScroll))
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

  &--home {
    top: 40%;
    left: 50%;
    width: 100%;
    max-width: 2000px;
    transform: translate(-50%, -50%);
    pointer-events: auto;
  }

  &--nav {
    top: 12px;
    left: 16px;
    width: 280px;
    transform: none;
    pointer-events: auto;
    z-index: -1;
    animation: intoBackground 3s;
  }

  &--nav--mobile {
    top: 10px;
    right: 16px;
    left: auto;
    width: 20%;
    transform: none;
    pointer-events: auto;
    z-index: -1;
    animation: intoBackgroundMobile 3s;
  }
}

@keyframes intoBackground {
  0% { z-index: 100; }
  99% { z-index: 100; }
  100% { z-index: -1; }
}

@keyframes intoBackgroundMobile {
  0% { z-index: 100; }
  99% { z-index: 100; }
  100% { opacity: 0; z-index: -1; }
}
</style>
