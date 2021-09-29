<template>
  <v-app :style="myStyle">
    <v-app-bar app color="secondary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/wings.png"
          transition="scale-transition"
          width="40"
        />

        Quest Route Planner
      </div>

      <v-spacer></v-spacer>

      <about-button />
      
    </v-app-bar>

    <v-main>
      <QuestPlanner />
      <!-- <Debug /> -->
    </v-main>

    <v-snackbar v-model="snackbar" timeout="1500">
      {{ snackbarMessage }}
    </v-snackbar>
  </v-app>
</template>

<script>
// import Debug from "./components/Debug";
import EventBus, { ACTIONS } from "./EventBus/index";

import AboutButton from "./components/AboutButton";
import QuestPlanner from "./components/QuestPlanner";

export default {
  name: "App",

  components: {
    QuestPlanner,
    AboutButton,
    // Debug
  },

  data: () => ({
    snackbar: false,
    snackbarMessage: "",
    myStyle: {
      backgroundColor: "#eeeeee",
    },
  }),

  mounted() {
    EventBus.$on(ACTIONS.SNACKBAR, (message) => {
      this.snackbarMessage = message;
      this.snackbar = true;
    });
  }
};

document.title = "Quest Routing"
</script>

