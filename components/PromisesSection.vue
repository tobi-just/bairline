<template>
  <div>
    <v-parallax src="/images/luxury.jpg" height="400">
      <div class="d-flex align-center justify-center fill-height">
        <h1 class="text-h2 font-weight-light parallax-title">What sets us apart</h1>
      </div>
    </v-parallax>
    <v-container class="my-16" id="promises">
      <v-row justify="space-around" class="text-center my-8">
        <v-col cols="12" md="6" class="text-justify">
          We know that there are hundreds of business jets in all parts of the
          world. But what most companies forget nowadays, is what Business
          Aviation is really about. We made it our top priority to give
          passengers the ability for flexible schedules that fits their needs.
          Bairline is spending a big effort on your personal demands, giving you
          the best experience while traveling. Luxurious aircraft will make you
          feel to be in the right place.
        </v-col>
      </v-row>
      <ClientOnly>
      <v-row justify="space-around" class="my-8 py-8">
        <v-col
          v-for="promise in promises"
          :key="promise.title"
          cols="12"
          md="4"
        >
          <template v-if="mobile">
            <v-card class="mx-auto" max-width="800" color="#1e1e1e" theme="dark">
              <v-img :src="promise.image" height="220" cover />
              <v-card-text>
                <p class="text-h5 text-white mb-4">{{ promise.title }}</p>
                <p class="text-justify card-text-color">{{ promise.content }}</p>
              </v-card-text>
              <v-card-actions v-if="promise.link" class="px-4">
                <v-btn :to="promise.linkInternal ? promise.link : undefined" :href="!promise.linkInternal ? promise.link : undefined" :target="!promise.linkInternal ? '_blank' : undefined" variant="tonal">Read more</v-btn>
              </v-card-actions>
            </v-card>
          </template>
          <template v-else>
            <v-hover v-slot="{ isHovering, props }">
              <v-card class="mx-auto position-relative" max-width="800" v-bind="props">
                <v-img
                  :src="promise.image"
                  min-height="400"
                  cover
                >
                  <v-card-title class="text-white position-absolute" style="bottom: 0;">
                    {{ promise.title }}
                  </v-card-title>
                </v-img>
                <v-expand-transition>
                  <v-card
                    v-if="isHovering"
                    class="card-reveal"
                    color="#1e1e1e"
                    theme="dark"
                  >
                    <v-card-text>
                      <p class="text-h4 text-white mb-4">{{ promise.title }}</p>
                      <p class="text-justify card-text-color">{{ promise.content }}</p>
                    </v-card-text>
                    <v-card-actions v-if="promise.link" class="px-4">
                      <v-btn :to="promise.linkInternal ? promise.link : undefined" :href="!promise.linkInternal ? promise.link : undefined" :target="!promise.linkInternal ? '_blank' : undefined" variant="tonal">Read more</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-expand-transition>
              </v-card>
            </v-hover>
          </template>
        </v-col>
      </v-row>
      </ClientOnly>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'

const { smAndDown: mobile } = useDisplay()

const promises = [
  {
    title: 'Flexibility',
    image: '/images/flexibility.jpg',
    content:
      'Our goal is to give you the flexibility you need when chartering a private jet. With us, you can be stuck in traffic and still be sure the jet is waiting for you. Or you decide to go for a dinner that takes you more time before your departure? No worries, we will be waiting for you at the airport.',
  },
  {
    title: 'Personality',
    image: '/images/personality.jpg',
    content:
      'Our team is as international as our destinations. Well trained and with worldwide experience we are not just your crew during the flight but are also involved in all processes of the company. With that we are ensuring short ways of communication and reliable information in every situation.',
    link: '/team',
    linkInternal: true,
  },
  {
    title: 'Luxury',
    image: '/images/luxury.jpg',
    content:
      'Although an aircraft is not fully equipped like a restaurant, we dedicate our service to a perfect dining experience over the clouds. Low total hour aircrafts and modern interiors combined with high class catering gives you the luxury you are expecting when choosing a business jet.',
    link: '/downloads/Menu List.pdf',
    linkInternal: false,
  },
]
</script>

<style lang="scss" scoped>
.parallax-title {
  color: white;
  text-shadow: 1px 2px 8px rgba(0, 0, 0, 0.8);
}

.card-reveal {
  bottom: 0;
  opacity: 0.95 !important;
  position: absolute;
  width: 100%;
  height: 100%;
}

.card-text-color {
  color: hsla(0, 0%, 100%, 0.7) !important;
}
</style>
