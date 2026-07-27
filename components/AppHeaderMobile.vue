<template>
  <div>
    <v-app-bar flat fixed color="transparent">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-spacer />
      <BairlineLogo v-show="!drawer && route.path !== '/'" class="nav-image" />
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      temporary
      color="#29323c"
    >
      <template #prepend>
        <BairlineLogo class="nav-drawer-image" />
      </template>

      <v-divider />
      <v-list nav density="compact">
        <v-list-item to="/" title="Home" />
        <v-list-item to="/offer" title="Charter" />
        <v-list-group value="Aircraft">
          <template #activator="{ props }">
            <v-list-item v-bind="props" title="Aircraft" />
          </template>
          <v-list-item
            v-for="plane in planeList"
            :key="plane.name"
            :to="`/plane/${plane.name}`"
            :title="plane.name"
          />
        </v-list-group>
        <v-list-item to="/gallery" title="Gallery" />
        <v-list-item to="/contact" title="Contact" />
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { planeList } = usePlanes()
const drawer = ref(false)
</script>

<style lang="scss" scoped>
.nav-image {
  height: 100%;
  width: 20%;
  animation: 3s appear;
}

.nav-drawer-image {
  width: 90%;
  padding: 8%;
}

@keyframes appear {
  0% { opacity: 0; }
  90% { opacity: 0; }
  100% { opacity: 1; }
}
</style>
