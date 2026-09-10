<template>
  <div>
    <HeroVideo
      src="/videos/city.mp4"
      mobile-src="/videos/city-mobile.mp4"
      poster="/images/city-poster.jpg"
      scroll-target="#services"
    >
      Private <br />
      Jet <br />
      Charter
    </HeroVideo>
    <v-container class="offer">
      <v-row align="center" justify="center" class="text-center" id="services">
        <v-col cols="12">
          <h1 class="text-h4 text-sm-h3 text-md-h2 font-weight-light my-8 my-md-12">
            Private Air Travel Services
          </h1>
        </v-col>
      </v-row>
      <v-row align="center" justify="center" class="my-2">
        <v-col cols="12" md="6">
          <v-img
            src="/images/business.jpg"
            cover
            height="clamp(220px, 55vw, 460px)"
            class="rounded-lg"
          />
        </v-col>
        <v-col
          cols="12"
          md="6"
          class="d-flex flex-column justify-center pa-2 pa-md-8 mt-4 mt-md-0"
        >
          <p class="text-body-1 text-left text-md-justify">
            The limousine goes directly from the office to the General Aviation
            Terminal. Within 10 minutes you are on the plane, which will take
            you to your business appointment in the morning. On our plane you
            will enjoy fresh coffee, croissants and various fruits as an
            excellent second breakfast while reading a selection of daily
            newspapers. At the arrival point the next vehicle is already waiting
            to take you comfortably to your meeting. After successful
            arrangements and an extended lunch, the driver will take you back to
            the airport and you will start your well-deserved journey home to
            spend the evening at home with your family.
          </p>
          <p class="text-body-1 text-left text-md-justify mt-4 mb-0">
            Take advantage of the various benefits of a private jet for your
            business travels. Arrive at your destination on time, in comfort and
            without traffic jams. Let us chauffeur you in the air and use the
            time for yourself. We know how valuable your time is. Extremely
            short distances, no waiting times, absolute privacy and the highest
            level of comfort ensure a pleasant travel experience that lets you
            concentrate on the essentials of your everyday professional life.
            The aircraft waits on site and is flexibly at your disposal should
            you wish to depart earlier or later. You worry a lot, but with
            Bairline you definitely won't worry about getting around.
          </p>
        </v-col>
      </v-row>
      <v-row align="center" class="text-center my-4 my-md-8">
        <v-col cols="12">
          <v-btn
            size="x-large"
            color="white"
            variant="flat"
            to="/contact"
            class="px-8"
          >
            Plan your trip
          </v-btn>
        </v-col>
      </v-row>
      <v-row align="stretch" justify="center" class="my-4 my-md-8">
        <v-col cols="12" md="5" class="text-center">
          <h2 class="text-h5 text-md-h4 font-weight-light mb-4">Our Commitment</h2>
          <p class="text-body-1 mx-auto" style="max-width: 30rem;">
            In addition to our invariable attention to safety and service,
            Bairline is committed to saving you time and money with your
            tailored private flight solution.
          </p>
        </v-col>
        <v-divider class="d-none d-md-flex mx-md-4" vertical />
        <v-divider class="d-flex d-md-none my-6" />
        <v-col cols="12" md="5" class="text-center">
          <h2 class="text-h5 text-md-h4 font-weight-light mb-4">Our Services</h2>
          <ul class="service-list text-body-1">
            <li>
              <v-icon size="18" class="service-list__icon">mdi-check</v-icon>
              <span>Pet friendly</span>
            </li>
            <li>
              <v-icon size="18" class="service-list__icon">mdi-check</v-icon>
              <span>Competitive pricing</span>
            </li>
            <li>
              <v-icon size="18" class="service-list__icon">mdi-check</v-icon>
              <span>
                Minimal lead time on domestic flights
                <small>(international flights subject to permits)</small>
              </span>
            </li>
            <li>
              <v-icon size="18" class="service-list__icon">mdi-check</v-icon>
              <span>24/7/365 service &amp; customer support</span>
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Charter' })
</script>

<style scoped>
.service-list {
  list-style: none;
  margin: 0 auto;
  padding: 0;
  max-width: 22rem;
  text-align: left;
}

.service-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  line-height: 1.5;
}

.service-list li + li {
  margin-top: 0.85rem;
}

.service-list__icon {
  color: rgb(var(--v-theme-error));
  margin-top: 0.15rem;
  flex-shrink: 0;
}

.service-list small {
  display: block;
  opacity: 0.6;
}
</style>
