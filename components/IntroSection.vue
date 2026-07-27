<template>
  <v-container class="intro" id="intro">
    <v-row align="center" justify="space-around" class="text-center fill-height">
      <v-col cols="12" md="6" class="text-justify">
        Bairline Fluggesellschaft mbH &amp; Co. KG started operation in 2007.
        The passion for aviation turned into a fast growing company with a wide portfolio of aircraft,
        covering all of our clients needs. Since the year of introduction, Bairline has proven itself
        as a competitive player in the Business Aviation market and is well-known by passengers and
        brokers for its personality, flexibility and state of the art aircraft.
      </v-col>
      <v-col cols="12">
        <v-divider class="divider" />
        <h1 class="section-title">Shortest communication line in the industry</h1>
        <v-divider class="divider" />
      </v-col>
      <v-col cols="12" md="8">
        <v-expansion-panels flat v-model="panel">
          <v-expansion-panel bg-color="transparent">
            <v-expansion-panel-title hide-actions class="text-center">
              <div class="w-100 text-center">
                <v-btn size="large">{{ panel === 0 ? 'Close' : 'Read more' }}</v-btn>
              </div>
            </v-expansion-panel-title>
            <v-expansion-panel-text class="text-justify">
              <p>
                When flying with Bairline, we guarantee all information will
                reach you on the fastest possible way. No waiting time for
                receiving departure/arrival movements. Short notice changes will
                be handled in seconds. Our advantage of having the Charter Sales
                and Pilots combined offers outstanding performance in the
                business aviation industry.
              </p>
              <p class="mt-4">
                Few places are more private and secure than inside one's private
                jet. Meet with colleagues and customers and never miss a thing
                back at the office as you travel across the country. The time
                you and your team save traveling directly to your destinations
                without the usual delays of conventional travel often make
                private jet charter a cost-saving alternative. And that's before
                you factor in the most important benefit of flying privately —
                being home in time for dinner. Leisure travelers who book
                charter flights with us fly when and where they wish and enjoy
                more possibilities to schedule special events with family and
                friends!
              </p>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const panel = ref<number | undefined>(undefined)
</script>

<style lang="scss" scoped>
.intro {
  padding-top: 20vh;
  margin-bottom: 10vh;
}

.section-title {
  line-height: 2rem;
  font-weight: 100;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 1rem 0;
}

.divider {
  width: 50%;
  margin: auto;
}
</style>
