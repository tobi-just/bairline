<template>
  <div>
    <v-app-bar flat color="transparent" :class="{ 'bg-dark': scrolled }" :elevation="0">
      <NuxtLink to="/" v-if="route.path !== '/'">
        <BairlineLogo class="header-logo ml-4" />
      </NuxtLink>
      <v-spacer />
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
  animation: 3s appear;
}

.bg-dark {
  background-color: #29323c !important;
}

.mail-btn {
  &:hover {
    transform: scale(1.2) !important;
  }
}

@keyframes appear {
  0% { opacity: 0; }
  90% { opacity: 0; }
  100% { opacity: 1; }
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
