<template>
  <div>
    <v-parallax src="/images/web/SLT_0779-Bearbeitet.jpg" style="height: 40vh;">
      <div class="d-flex align-center justify-center fill-height">
        <h1 class="text-h2 font-weight-light" style="color: white; text-shadow: 1px 2px 8px rgba(0,0,0,0.8);">Gallery</h1>
      </div>
    </v-parallax>
    <v-container class="my-8">
      <v-row>
        <v-col
          v-for="(image, i) in allImages"
          :key="i"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <v-img
            :src="image"
            height="250"
            cover
            class="rounded cursor-pointer"
            @click="openDialog(i)"
          />
        </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="dialog" max-width="900" scrim="#212121" class="gallery-dialog">
      <v-carousel v-model="currentIndex" hide-delimiters show-arrows>
        <v-carousel-item
          v-for="(image, i) in allImages"
          :key="i"
          :src="image"
          cover
        />
      </v-carousel>
    </v-dialog>
    <Teleport to="body">
      <v-btn
        v-if="dialog"
        icon
        variant="text"
        style="position: fixed; top: 16px; right: 16px; z-index: 99999; color: white;"
        @click="dialog = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Gallery' })

const galleryImages = [
  '/images/gallery/01_WhatsApp Image 2022-03-22 at 07.42.05.jpeg',
  '/images/gallery/02_WhatsApp Image 2022-03-22 at 07.42.06 (1).jpeg',
  '/images/gallery/03_WhatsApp Image 2022-03-22 at 07.42.06.jpeg',
  '/images/gallery/107F75B2-2AAC-4CE0-BF47-6D2829660C87.jpeg',
  '/images/gallery/1732495E-4468-424A-B57F-8FA5E7392E29.jpeg',
  '/images/gallery/36B2EE9F-DCC5-4642-A00C-A3C1C08A65AF.jpeg',
  '/images/gallery/68E277C2-E2C8-4F95-BF95-DCD420C9563A.jpeg',
  '/images/gallery/7E4D1B61-B1FB-4F94-8F03-8E1BAEECDE87.jpeg',
  '/images/gallery/B7872D40-C6D7-4CFE-9D59-2DF1C61F18D1.jpeg',
  '/images/gallery/C80B361E-5BE5-4B37-9CA5-FF238005686D.jpeg',
  '/images/gallery/CB72DADE-746B-4DC3-8609-3859594BFA40.jpeg',
  '/images/gallery/DFAB0123-BEF6-48C6-A9A3-27D488F2F3E2.jpeg',
  '/images/gallery/E627A52D-A1C1-4A45-A56C-C95C7F507D34.jpeg',
  '/images/gallery/IMG_0350.jpeg',
  '/images/gallery/IMG_0402.jpeg',
  '/images/gallery/IMG_9802.jpeg',
  '/images/gallery/WhatsApp Image 2020-12-31 at 12.42.21.jpeg',
]

const allImages = computed(() => galleryImages)

const dialog = ref(false)
const currentIndex = ref(0)

function openDialog(index: number) {
  currentIndex.value = index
  dialog.value = true
}
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>

<style>
.gallery-dialog .v-overlay__scrim {
  opacity: 0.99 !important;
}

.gallery-dialog .v-carousel__controls .v-btn,
.gallery-dialog .v-window__controls .v-btn,
.gallery-dialog .v-carousel .v-btn--icon {
  background-color: rgba(0, 0, 0, 0.3) !important;
  color: white !important;
}

.gallery-dialog .close-btn {
  background-color: rgba(255, 255, 255, 0.5) !important;
  color: black !important;
}
</style>
