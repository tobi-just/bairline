<template>
  <div>
    <v-parallax src="/images/window.jpg" style="height: 40vh;">
      <div class="d-flex align-center justify-center fill-height">
        <h1 class="text-h2 font-weight-light parallax-title">Meet our fleet</h1>
      </div>
    </v-parallax>
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
      <v-row justify="space-around" class="my-8">
        <v-col
          v-for="plane in planeList"
          :key="plane.name"
          cols="12"
          lg="4"
        >
          <v-card
            class="mx-auto my-12"
            max-width="800"
            :to="`/plane/${plane.name}`"
            color="#1e1e1e"
            theme="dark"
          >
            <v-img :src="plane.entryImage" cover height="250" />
            <v-card-title class="text-h5 pt-4 px-6">{{ plane.name }}</v-card-title>
            <v-card-subtitle class="text-subtitle-1 px-6 pb-2">{{ plane.tagline }}</v-card-subtitle>
            <v-card-text class="text-justify px-6">{{ plane.content }}</v-card-text>
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
    </v-container>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { planeList } = usePlanes()
</script>

<style scoped>
.parallax-title {
  color: #29323c;
}

:deep(.v-card) {
  color: hsla(0, 0%, 100%, 0.7) !important;
}
</style>
