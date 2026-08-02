<template>
  <div>
    <HeroVideo src="/videos/city.mp4" scroll-target="#services">
      Private <br />
      Jet <br />
      Charter
    </HeroVideo>
    <v-container>
      <v-row align="center" justify="center" class="text-center" id="services">
        <v-col cols="12">
          <h1 class="text-h2 my-8">Private Air Travel Services</h1>
        </v-col>
      </v-row>
      <v-row align="center" class="text-center" justify="center">
        <v-col cols="12" md="6">
          <v-img src="/images/business.jpg" height="500" class="ma-8" />
        </v-col>
        <v-col cols="12" md="6" class="d-flex flex-column align-self-stretch justify-space-around pa-8">
          <div class="text-body-1 text-justify">
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
          </div>
          <div class="text-body-1 text-justify mt-4">
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
          </div>
        </v-col>
      </v-row>
      <v-row align="center" class="text-center">
        <v-col cols="12">
          <v-btn size="x-large" color="white" variant="flat" to="/contact">
            Plan your trip
          </v-btn>
        </v-col>
      </v-row>
      <v-row align="center" justify="space-around" class="my-8">
        <v-col cols="12" md="4">
          <h2 class="text-h4 text-center">Our Commitment:</h2>
          <p class="py-2">
            In addition to our invariable attention to safety and service,
            Bairline is committed to saving you time and money with your
            tailored private flight solution.
          </p>
        </v-col>
        <v-divider class="d-none d-md-flex" vertical />
        <v-divider class="d-flex d-md-none my-4" />
        <v-col cols="12" md="4">
          <h2 class="text-h4 text-center">Our Services:</h2>
          <div class="py-2">
            <ul>
              <li>pet friendly</li>
              <li>competitive pricing</li>
              <li>Minimal lead time on domestic flights <small>(international flights subject to permits)</small></li>
              <li>24/7/365 services/customer support</li>
            </ul>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Charter' })
</script>
