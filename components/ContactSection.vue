<template>
  <div>
    <div class="hero">
      <v-parallax
        src="/images/business.jpg"
        scale="0.85"
        height="100%"
        class="hero__bg d-md-none"
      />
      <v-img
        src="/images/business.jpg"
        cover
        position="center center"
        height="100%"
        class="hero__bg d-none d-md-flex"
      />
      <div class="hero__content d-flex flex-column align-center justify-center text-center">
        <h1 class="text-h2 font-weight-light hero-title">Get in Touch</h1>
        <v-btn
          class="mt-8 contact-cta"
          size="x-large"
          variant="text"
          color="white"
          rounded="pill"
          @click="scrollToContact"
        >
          Contact us
        </v-btn>
      </div>
    </div>
    <v-container class="my-16" id="contact">
      <v-row align="center" justify="space-around" class="my-8 text-center">
        <v-col cols="12" md="8" class="d-flex flex-column">
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

/* Frosted-dark CTA to match the hero title's glass language. */
.contact-cta {
  height: 60px;
  padding-inline: 2.75rem;
  font-size: 1.05rem;
  letter-spacing: 0.14em;
  background-color: rgba(17, 22, 28, 0.3) !important;
  border: 1px solid rgba(255, 255, 255, 0.28);
  backdrop-filter: blur(10px) saturate(150%);
  -webkit-backdrop-filter: blur(10px) saturate(150%);
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

.contact-cta:hover {
  background-color: rgba(17, 22, 28, 0.44) !important;
  border-color: rgba(255, 255, 255, 0.45);
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
