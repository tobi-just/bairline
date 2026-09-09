<template>
  <div v-if="plane">
    <div
      class="hero text-center"
      :style="{ '--cover-position': plane.coverPosition || 'center center' }"
    >
      <v-parallax
        :src="plane.coverImage"
        scale="0.85"
        height="100%"
        class="hero__bg hero__bg--parallax d-md-none"
      />
      <v-img
        :src="plane.coverImage"
        cover
        :position="plane.coverPosition || 'center center'"
        height="100%"
        class="hero__bg d-none d-md-flex"
      />
      <v-row align="end" justify="center" no-gutters class="hero__content">
        <v-col cols="2" class="align-self-start mt-16 text-left">
          <v-btn
            size="x-small"
            variant="text"
            color="white"
            :to="`/plane/${prevPlane.name}`"
          >
            <v-icon start>mdi-chevron-left</v-icon>
            {{ prevPlane.name }}
          </v-btn>
        </v-col>
        <v-col cols="8" class="pb-16 mb-8">
          <h1 class="text-h1 text-shadow">{{ plane.name }}</h1>
        </v-col>
        <v-col cols="2" class="align-self-start mt-16 text-right">
          <v-btn
            size="x-small"
            variant="text"
            color="white"
            :to="`/plane/${nextPlane.name}`"
          >
            {{ nextPlane.name }}
            <v-icon end>mdi-chevron-right</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </div>

    <v-container class="my-16 text-center" id="plane">
      <v-row align="center" justify="center">
        <v-col cols="12">
          <h1>{{ plane.tagline }}</h1>
          <v-divider class="ma-4" />
        </v-col>
        <v-col cols="12" md="6">
          {{ plane.content }}
        </v-col>
        <v-col cols="12">
          <v-dialog v-model="externalLink" width="500">
            <template #activator="{ props }">
              <v-btn
                v-if="plane.tourUrl"
                color="red"
                variant="text"
                class="no-text-transform"
                v-bind="props"
              >
                <div class="pa-1">
                  <div>
                    Virtual
                    <v-icon class="pulse">mdi-rotate-3d</v-icon>
                    Tour
                  </div>
                  <small>[External Link]</small>
                </div>
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="text-subtitle-1">
                You are now leaving the Bairline website. When you click on
                'Okay' you will leave the website and will be redirected to
                another site.
              </v-card-title>
              <v-divider />
              <v-card-actions>
                <v-spacer />
                <v-btn @click="externalLink = false">Cancel</v-btn>
                <v-btn
                  color="grey-lighten-1"
                  :href="plane.tourUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  @click="externalLink = false"
                >
                  Okay
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>

      <v-row align="center" justify="center">
        <v-col cols="12" md="9" v-if="plane.floorplan">
          <Transition name="fade" mode="out-in">
            <v-img
              :key="dayNight ? 'day' : 'night'"
              :src="dayNight ? plane.floorplan : (plane.floorplan_night || plane.floorplan)"
            />
          </Transition>
          <div class="d-flex justify-center align-center" v-if="plane.floorplan_night">
            <v-icon :color="dayNight ? '#aaa' : ''">mdi-power-sleep</v-icon>
            <v-switch
              v-model="dayNight"
              inset
              :ripple="false"
              color="white"
              class="mx-2"
              hide-details
            />
            <v-icon :color="!dayNight ? '#aaa' : ''">mdi-white-balance-sunny</v-icon>
          </div>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="12">
          <h2>Technical information</h2>
          <v-divider class="ma-4" />
        </v-col>
      </v-row>

      <v-row justify="center" class="px-16">
        <v-col cols="6" md="3" v-for="(item, i) in icons" :key="i" class="my-4">
          <v-sheet class="d-flex flex-column align-center" color="transparent" max-height="200">
            <v-icon size="x-large">{{ item.icon }}</v-icon>
            <h3 class="font-weight-light mt-4 text-overline">
              {{ plane.facts[item.label] }}
            </h3>
          </v-sheet>
        </v-col>
      </v-row>

      <v-row align="center" justify="center" v-if="plane.rangeMap">
        <v-col cols="12">
          <h2>Range Map</h2>
          <v-divider class="ma-4" />
        </v-col>
        <v-col cols="10" md="6">
          <v-img :src="plane.rangeMap" />
        </v-col>
      </v-row>

      <v-row align="center" justify="center">
        <v-col cols="12">
          <h2>Downloads</h2>
          <v-divider class="ma-4" />
          <v-btn
            v-if="plane.factSheet"
            variant="text"
            :href="plane.factSheet"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fact Sheet <v-icon size="small">mdi-download</v-icon>
          </v-btn>
          <v-btn
            variant="text"
            href="/downloads/Menu List.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Catering <v-icon size="small">mdi-download</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="gallery-section" v-if="plane.gallery.length">
      <v-row align="center" justify="center">
        <v-col cols="12" md="9">
          <v-carousel cycle hide-delimiters show-arrows="hover">
            <v-carousel-item
              v-for="(item, i) in plane.gallery"
              :key="i"
              :src="item"
              cover
              @click="openDialog(i)"
              style="cursor: pointer;"
            />
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="galleryDialog" max-width="900" scrim="#212121" class="plane-gallery-dialog">
      <v-carousel hide-delimiters show-arrows v-model="galleryIndex">
        <v-carousel-item
          v-for="(item, i) in plane.gallery"
          :key="i"
          :src="item"
          cover
        />
      </v-carousel>
    </v-dialog>
    <Teleport to="body">
      <v-btn
        v-if="galleryDialog"
        icon
        variant="text"
        style="position: fixed; top: 16px; right: 16px; z-index: 99999; color: white;"
        @click="galleryDialog = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { getPlane, getNextPlane, getPrevPlane } = usePlanes()

const planeName = computed(() => decodeURIComponent(route.params.id as string))
const plane = computed(() => getPlane(planeName.value))
const nextPlane = computed(() => getNextPlane(planeName.value))
const prevPlane = computed(() => getPrevPlane(planeName.value))

useHead({ title: planeName.value })

const dayNight = ref(true)
const externalLink = ref(false)
const galleryDialog = ref(false)
const galleryIndex = ref(0)

const icons = [
  { icon: 'mdi-car-seat', label: 'passengers' as const },
  { icon: 'mdi-bag-checked', label: 'luggage' as const },
  { icon: 'mdi-speedometer', label: 'speed' as const },
  { icon: 'mdi-wrench', label: 'manufactured' as const },
  { icon: 'mdi-arrow-expand-vertical', label: 'height' as const },
  { icon: 'mdi-arrow-expand-horizontal', label: 'width' as const },
  { icon: 'mdi-arrow-left-right', label: 'length' as const },
  { icon: 'mdi-arrow-decision', label: 'range' as const },
]

function openDialog(index: number) {
  galleryIndex.value = index
  galleryDialog.value = true
}
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  height: clamp(340px, 60vh, 600px);
}

.hero__bg {
  height: 100% !important;
}

.hero__content {
  position: absolute;
  inset: 0;
}

.hero__bg--parallax :deep(.v-img__img) {
  object-position: var(--cover-position, center center);
}

.gallery-section {
  background: #303a46;
}

.cursor-pointer {
  cursor: pointer;
}

.pulse {
  margin: 5px;
  animation: pulse 2s infinite;
}

.text-shadow {
  text-shadow: 2px 2px #29323c;
}

@keyframes pulse {
  0% {
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(244, 67, 54, 0.4);
  }
  70% {
    border-radius: 50%;
    box-shadow: 0 0 0 10px rgba(244, 67, 54, 0);
  }
  100% {
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(244, 67, 54, 0);
  }
}
</style>

<style>
.plane-gallery-dialog .v-overlay__scrim {
  opacity: 0.99 !important;
}

.plane-gallery-dialog .v-carousel__controls .v-btn,
.plane-gallery-dialog .v-window__controls .v-btn,
.plane-gallery-dialog .v-carousel .v-btn--icon {
  background-color: rgba(0, 0, 0, 0.3) !important;
  color: white !important;
}
</style>
