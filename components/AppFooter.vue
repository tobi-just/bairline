<template>
  <v-container fluid class="footer">
    <v-row dense justify="center" class="text-center mb-4">
      <v-col cols="12" class="mb-4 d-flex justify-center">
        <div class="nav-pill">
          <v-btn variant="text" :ripple="false" to="/">Home</v-btn>
          <v-btn variant="text" :ripple="false" to="/offer">Charter</v-btn>
          <v-btn variant="text" :ripple="false" to="/aircraft">Aircraft</v-btn>
          <v-btn variant="text" :ripple="false" to="/team">Team</v-btn>
          <v-btn variant="text" :ripple="false" to="/gallery">Gallery</v-btn>
          <v-btn variant="text" :ripple="false" to="/contact">Contact</v-btn>
        </div>
      </v-col>
      <v-col cols="12" class="d-flex justify-center">
        <div class="nav-pill">
          <v-btn variant="text" :ripple="false" to="/privacy-policy" class="text-caption">
            Privacy Policy
          </v-btn>
          <v-btn variant="text" :ripple="false" to="/terms" class="text-caption">
            Terms &amp; Conditions
          </v-btn>
          <v-btn variant="text" :ripple="false" to="/impressum" class="text-caption">
            Imprint
          </v-btn>
        </div>
      </v-col>
      <v-col cols="8">
        <v-divider />
      </v-col>
      <v-col cols="12" class="text-body-2">
        All Rights Reserved &copy; Bairline Fluggesellschaft mbH &amp; Co. KG,
        Innsbrucker Bundesstra&szlig;e 107, 5020 Salzburg, AT,
        <a href="tel:+49 (0)30 8631 8972" class="text-decoration-none text-white">+49 (0)30 8631 8972</a>,
        <a href="mailto:sales@bairline.at" class="text-decoration-none text-white">sales@bairline.at</a>
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

// Same pill-shaped buttons as the header's nav island — no glass
// background/border here, just the rounded buttons and active highlight.
.nav-pill {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2px;

  .v-btn {
    border-radius: 999px;
  }

  .v-btn--active {
    background-color: rgba(255, 255, 255, 0.16);
  }
}
</style>
