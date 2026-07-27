<template>
  <div>
    <v-parallax src="/images/window.jpg" style="height: 40vh;">
      <v-container class="fill-height">
        <v-row align="center" class="text-left">
          <v-col cols="4" offset="2">
            <h1 class="contact-hero-title my-8">Get in Touch</h1>
            <v-btn
              size="x-large"
              variant="outlined"
              color="#29323c"
              @click="scrollToContact"
            >
              Contact us
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
    <v-container class="my-16" id="contact">
      <v-row align="center" justify="space-around" class="my-8 text-center">
        <v-col cols="8" class="d-flex flex-column">
          <h1 class="text-h2 mb-8">Book Your Next Private Jet Charter Today</h1>
          <div class="text-center">
            Whether private leisure, business trip or brokerage of an aircraft,
            our team can make your experience in Private Aviation exceptional.
            Please feel free to contact us directly in the way you feel most
            comfortable.
          </div>
        </v-col>
      </v-row>
      <v-row align="start" justify="center" class="text-center my-12">
        <v-col cols="12" md="4" class="avatar-col">
          <a href="tel:+49 (0)30 8631 8972" class="text-decoration-none text-white">
            <v-avatar size="128" color="red-lighten-2">
              <v-icon size="85">mdi-phone</v-icon>
            </v-avatar>
            <h2 class="text-uppercase font-weight-light my-4">Phone</h2>
            <div class="text-h5 my-8">+49 (0)30 8631 8972</div>
          </a>
        </v-col>
        <v-col cols="12" md="4" class="avatar-col">
          <a
            href="https://www.google.com/maps?hl=en&daddr=Innsbrucker%20Bundesstra%C3%9Fe%20107,5020%20Salzburg"
            class="text-decoration-none text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-avatar size="128" color="red-lighten-2">
              <v-icon size="85">mdi-map-marker</v-icon>
            </v-avatar>
            <h2 class="text-uppercase font-weight-light my-4">Address</h2>
            <div class="text-center text-body-1 my-8">
              <span class="font-weight-bold">
                Bairline Fluggesellschaft mbH &amp; Co. KG
              </span>
              <br />
              Innsbrucker Bundesstra&szlig;e 107 <br />
              5020 Salzburg, Austria
            </div>
          </a>
        </v-col>
        <v-col cols="12" md="4" class="avatar-col">
          <a href="mailto:sales@bairline.at" class="text-decoration-none text-white">
            <v-avatar size="128" color="red-lighten-2">
              <v-icon size="85">mdi-message</v-icon>
            </v-avatar>
            <h2 class="text-uppercase font-weight-light my-4">Email</h2>
            <div class="text-h5 my-8">sales@bairline.at</div>
          </a>
        </v-col>
      </v-row>
      <div class="text-center my-12">
        <v-btn icon size="x-large" href="https://www.facebook.com/bairline/" target="_blank">
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn icon size="x-large" href="https://www.instagram.com/bairline.fluggesellschaft/?hl=de" target="_blank">
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
        <v-btn icon size="x-large" href="https://de.linkedin.com/company/bairline-fluggesellschaft-mbh-&-co.-kg" target="_blank">
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts">
function scrollToContact() {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style lang="scss" scoped>
.contact-hero-title {
  font-size: 5rem !important;
  line-height: 5rem;
  text-transform: uppercase;
  color: #29323c;
}

.avatar-col:hover :deep(.v-avatar) {
  animation: Scale 0.5s linear both;
}

@keyframes Scale {
  0% { transform: scale(1); }
  85% { transform: scale(1.1); }
  100% { transform: scale(1.1); }
}
</style>
