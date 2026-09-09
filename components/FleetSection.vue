<template>
  <div>
    <div class="hero text-center">
      <v-parallax
        src="/images/Gulfstream-left75.jpg"
        scale="0.85"
        height="100%"
        class="hero__bg d-md-none"
      />
      <v-img
        src="/images/Gulfstream-left75.jpg"
        cover
        position="center center"
        height="100%"
        class="hero__bg d-none d-md-flex"
      />
      <div class="hero__content d-flex align-center justify-center">
        <h1 class="text-h2 font-weight-light hero-title">Meet our fleet</h1>
      </div>
    </div>
    <v-container class="my-16">
      <v-row justify="space-around" class="text-center my-8">
        <v-col cols="12" md="6" class="text-justify">
          With a concept made in Bavaria, Bairline represents what Business
          Aviation is meant to be! You want to go on holiday or just need to get
          to your next business meeting? You are looking for an intercontinental
          flight or the quickest way across Europe? We offer the right aircraft
          for any of your demands.
        </v-col>
      </v-row>
      <ClientOnly>
        <v-row justify="space-around" class="my-8">
          <v-col
            v-for="plane in planeList"
            :key="plane.name"
            cols="12"
            lg="4"
            class="d-flex"
          >
            <v-card
              class="mx-auto my-12 d-flex flex-column"
              style="width: 100%;"
              max-width="800"
              :to="`/plane/${plane.name}`"
              color="#1e1e1e"
              theme="dark"
            >
              <v-img :src="plane.entryImage" cover height="250" min-height="250" max-height="250" />
              <v-card-title class="text-h5 pt-4 px-6">{{ plane.name }}</v-card-title>
              <v-card-subtitle class="text-subtitle-1 px-6 pb-2">{{ plane.tagline }}</v-card-subtitle>
              <v-card-text class="text-justify px-6 flex-grow-1">{{ plane.content }}</v-card-text>
              <v-divider class="mx-6" />
              <v-card-title class="text-h6 px-6">Details</v-card-title>
              <v-card-text class="px-6">
                <ul style="list-style: disc; padding-left: 20px; margin-left: 0;">
                  <li>{{ plane.facts.passengers }}</li>
                  <li>{{ plane.facts.luggage }}</li>
                  <li>{{ plane.facts.speed }}</li>
                  <li>{{ plane.facts.range }}</li>
                </ul>
              </v-card-text>
              <v-card-actions class="px-6 pb-4">
                <v-btn :to="`/plane/${plane.name}`" variant="tonal">Read more</v-btn>
                <v-btn to="/contact" color="#616161" variant="flat" class="text-white">Plan your trip</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </ClientOnly>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { planeList } = usePlanes()
</script>

<style scoped>
.hero {
  position: relative;
  height: clamp(240px, 40vh, 420px);
  overflow: hidden;
}

.hero__bg {
  height: 100% !important;
}

.hero__content {
  position: absolute;
  inset: 0;
}

/* Frosted backing that dissolves into the photo ("Breath") — no border,
   the blur fades to nothing well inside its own (over-sized) box. */
.hero-title {
  position: relative;
  isolation: isolate;
  display: inline-block;
  color: #fff;
  padding: 0.7em 1.4em;
}

.hero-title::before {
  content: "";
  position: absolute;
  inset: -1em -2.4em;
  z-index: -1;
  background-color: rgba(17, 22, 28, 0.11);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  -webkit-mask: radial-gradient(66% 58% at 50% 50%, #000 0%, rgba(0, 0, 0, 0.45) 26%, transparent 52%);
  mask: radial-gradient(66% 58% at 50% 50%, #000 0%, rgba(0, 0, 0, 0.45) 26%, transparent 52%);
}

:deep(.v-card) {
  color: hsla(0, 0%, 100%, 0.7) !important;
}
</style>
