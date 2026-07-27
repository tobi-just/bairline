<template>
  <v-container fluid class="footer">
    <v-row dense justify="center" class="text-center mb-4">
      <v-col cols="12" class="mb-4">
        <v-btn variant="text" to="/">Home</v-btn>
        <v-btn variant="text" to="/offer">Charter</v-btn>
        <v-btn variant="text" to="/aircraft">Aircraft</v-btn>
        <v-btn variant="text" to="/team">Team</v-btn>
        <v-btn variant="text" to="/gallery">Gallery</v-btn>
        <v-btn variant="text" to="/contact">Contact</v-btn>
      </v-col>
      <v-col cols="12">
        <v-btn variant="text" class="text-caption">Privacy Policy</v-btn>
        <v-btn
          variant="text"
          href="/downloads/T&Cs Bairline Fluggesellschaft GmbH.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="text-caption"
        >
          Terms &amp; Conditions
        </v-btn>
      </v-col>
      <v-col cols="8">
        <v-divider />
      </v-col>
      <v-col cols="12" class="text-body-2">
        All Rights Reserved &copy; Bairline Fluggesellschaft mbH &amp; Co. KG,
        Innsbrucker Bundesstra&szlig;e 107, 5020 Salzburg, AT,
        <a href="tel:+49 (0)30 8631 8972" class="text-decoration-none text-white">
          +49 (0)30 8631 8972
        </a>
        <br />
        Website by Tobias Just
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.footer {
  background-color: #29323c;
}
</style>
