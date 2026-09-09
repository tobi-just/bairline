<template>
  <div>
    <v-app-bar flat color="transparent" :class="{ 'bg-dark': scrolled }" :elevation="0">
      <ClientOnly>
        <NuxtLink to="/" v-if="route.path !== '/'">
          <BairlineLogo class="header-logo ml-4" />
        </NuxtLink>
      </ClientOnly>
      <v-spacer />
      <div class="nav-menu" :class="{ 'nav-menu--scrolled': scrolled, 'nav-menu--plain': isHome }">
        <v-btn variant="text" :ripple="false" to="/offer" :active="route.path === '/offer'">Charter</v-btn>
        <v-menu open-on-hover>
          <template #activator="{ props }">
            <v-btn variant="text" :ripple="false" to="/aircraft" v-bind="props" :active="route.path === '/aircraft' || route.path.startsWith('/plane/')">Aircraft</v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="plane in planeList"
              :key="plane.name"
              :to="`/plane/${plane.name}`"
            >
              <v-list-item-title>{{ plane.name }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn variant="text" :ripple="false" to="/team" :active="route.path === '/team'">Team</v-btn>
        <v-btn variant="text" :ripple="false" to="/gallery" :active="route.path === '/gallery'">Gallery</v-btn>
      </div>
      <v-btn
        icon
        color="red"
        variant="flat"
        to="/contact"
        class="mail-btn ml-4 mr-4"
      >
        <v-icon>mdi-email</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { planeList } = usePlanes()

const isHome = computed(() => route.path === '/')
const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 100
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style lang="scss" scoped>
.header-logo {
  width: 280px;
  z-index: 10;
}

// Floating "glass" island behind the nav links only — the hero image
// stays fully visible, no full-width bar.
.nav-menu {
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 4px 6px;
  border-radius: 999px;
  background-color: rgba(17, 22, 28, 0.3);
  backdrop-filter: blur(14px) saturate(160%);
  -webkit-backdrop-filter: blur(14px) saturate(160%);
  border: 1px solid rgba(255, 255, 255, 0.14);
  transition: background-color 0.3s ease;

  .v-btn {
    border-radius: 999px;
  }

  .v-btn--active {
    background-color: rgba(255, 255, 255, 0.16);
  }
}

.bg-dark {
  background-color: #29323c !important;
}

// Once scrolled, the full-width bar returns, so the island blends
// back into it instead of showing as a lozenge.
.nav-menu--scrolled {
  background-color: transparent;
  border-color: transparent;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
}

// Home / entry page keeps the original plain header — no glass island.
.nav-menu--plain {
  padding: 0;
  gap: 0;
  background-color: transparent;
  border-color: transparent;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;

  .v-btn {
    border-radius: 4px;
  }

  .v-btn--active {
    background-color: transparent;
  }
}

.mail-btn {
  &:hover {
    transform: scale(1.2) !important;
  }
}


.v-btn {
  animation: FadeIn 0.5s linear;
  animation-fill-mode: both;

  &:nth-of-type(1) { animation-delay: 0.5s; }
  &:nth-of-type(2) { animation-delay: 1s; }
  &:nth-of-type(3) { animation-delay: 1.5s; }
  &:nth-of-type(4) { animation-delay: 2s; }
}

@keyframes FadeIn {
  0% { opacity: 0; transform: scale(0.1); }
  85% { opacity: 1; transform: scale(1.05); }
  100% { transform: scale(1); }
}
</style>
