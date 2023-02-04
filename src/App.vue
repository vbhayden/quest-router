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
      <AboutButton />
      
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row class="text-center">
          
          <v-col cols="4">
            <quest-planner-sidebar />
          </v-col>
          
          <v-col cols="8">
            <spirit-table />
          </v-col>

        </v-row>
      </v-container>
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
import QuestPlannerSidebar from "./components/QuestPlannerSidebar";
import SpiritTable from "./components/SpiritTable";

export default {
  name: "App",

  components: {
    AboutButton,
    QuestPlannerSidebar,
    SpiritTable,
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

