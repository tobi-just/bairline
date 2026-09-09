<template>
  <div>
    <v-parallax src="/images/team2.jpg" scale="0.85" style="height: 40vh;">
      <div class="d-flex align-center justify-center fill-height">
        <h1 class="text-h2 font-weight-light" style="color: white; text-shadow: 1px 2px 8px rgba(0,0,0,0.8);">Meet the team</h1>
      </div>
    </v-parallax>
    <v-container>
      <v-row justify="space-around" v-for="(person, index) in persons" :key="index">
        <v-col cols="12">
          <v-card class="mx-auto" color="#29323c" max-width="800">
            <div class="d-flex flex-no-wrap justify-space-between" :class="{ 'flex-row-reverse': index % 2 }">
              <v-col cols="4" :class="{ 'text-right': index % 2 }">
                <v-avatar size="100">
                  <v-img :src="person.image" />
                </v-avatar>
                <v-card-title class="text-h6 person-name" :class="{ 'justify-end': index % 2 }">
                  {{ person.name }}
                </v-card-title>
                <v-card-subtitle class="person-job">{{ person.job }}</v-card-subtitle>
              </v-col>
              <v-col class="align-self-center mx-2">
                {{ person.description }}
              </v-col>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" v-if="index !== persons.length - 1">
          <v-divider />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Team' })

const persons = [
  {
    name: 'Nico Just',
    image: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light',
    job: 'Sales Director, Captain Citation X',
    description: `One of his first flights at the age of 3, evolved Nico's dream to begin a career in aviation. In 2012 he learned about the significance of charter sales and expanded his knowledge as a Sales Manager beside being a pilot. Following working positions in Austria, Malta and Russia, Nico started working for Bairline in 2015 where he is establishing the company's strong position as a leading business jet operator in Europe since.`,
  },
  {
    name: 'Franziska Wieser',
    image: 'https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light',
    job: 'Sales Manager, Worldwide Charter Flights',
    description: `Franziska's passion for travelling and exploring the world has always kept her close to aviation. Having travelled extensively herself, she knows how valuable flexibility, reliability and a smooth travel experience can be. With a background in International Management and Project Management, she joined Bairline in August 2025 and found her way into the fast-paced world of private aviation. As a Sales Manager, she enjoys working with people from all over the world, finding individual solutions for every trip and the fact that no two days are ever the same. With her open and communicative nature, Franziska particularly appreciates the personal side of charter sales and the opportunity to turn each request into a smooth and memorable travel experience.`,
  },
  {
    name: 'Ignacio Iglesias',
    image: 'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light',
    job: 'Sales Manager, Worldwide Charter Flights',
    description: `Ignacio's passion for travel started amid his grandparent globe, kids atlas and Jules Verne books. A degree in Tourism Management and lots of Travel and Service positions in 3 continents gave him a load of experience to deal with every situation imaginable. And then there was aviation. 9 years as a Cabin Crew in the Middle East and a Private Pilot Licence opened a path that organically led to Private Aviation. Part of Bairline since 2025, has been learning all the ins and outs since then while providing all his valuable experience and insights to help towards an environment of constant improvement. Ignacio's friendly and frank approach to all stakeholders really shines in times where timelines are tight and pressure is on. Always approachable with a smile ready to deliver the best possible results to our partners.`,
  },
]
</script>

<style scoped>
.person-name {
  white-space: normal !important;
  overflow: visible !important;
  text-overflow: unset !important;
}

.person-job {
  white-space: normal !important;
  overflow: visible !important;
  text-overflow: unset !important;
  opacity: 1;
}
</style>
