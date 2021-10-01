<template>
  <v-container>
    <v-row class="text-center">
      <!-- <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col> -->

      <v-col cols="4">
        <v-card flat>
          <v-form ref="form" @submit.prevent="submit">
            <v-container fluid>
              <v-row>
                <v-col cols="4">
                  <v-card>
                    <v-card-text>
                      <div>Extra Spirits</div>
                      <p class="text-h2 text--primary">
                        {{ form.extraSpirits }}
                      </p>
                      <div
                        class="text--primary"
                        v-if="!$vuetify.breakpoint.smAndDown"
                      >
                        Amount of additional spirits collected for this route.
                      </div>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="4">
                  <v-card>
                    <v-card-text>
                      <div>Hit Reduction</div>
                      <p class="text-h2 text--primary">
                        {{ form.fewerRocks }}
                      </p>
                      <div
                        class="text--primary"
                        v-if="!$vuetify.breakpoint.smAndDown"
                      >
                        Difference in avalanche hits for this route.
                      </div>
                    </v-card-text>
                  </v-card>
                </v-col>

                <v-col cols="4">
                  <v-text-field
                    v-model="form.solvaring"
                    color="purple darken-2"
                    label="Solvaring XP Grind"
                    type="number"
                    outlined
                    dense
                    required
                  />
                  <v-text-field
                    v-model="form.zelse"
                    color="blue darken-2"
                    label="Zelse XP Grind"
                    type="number"
                    outlined
                    dense
                    required
                    hide-details
                  />
                  <v-switch
                    v-model="form.earlyEscape"
                    label="Early Escape"
                    color="red"
                    @change="onEscapeSwitchChanged(this)"
                    hide-details
                  />
                  <v-switch
                    v-model="form.jp"
                    label="JP Version"
                    color="red"
                    @change="onJPSwitchChanged(this)"
                    hide-details
                  />
                </v-col>
              </v-row>
            </v-container>

            <v-row style="margin: 10px">
              <v-select
                :items="presetRoutes"
                v-model="form.routeSelected"
                v-on:change="onRouteSelected"
                item-text="name"
                label="Route Presets"
                solo
                hide-details
              ></v-select>
            </v-row>
            <v-row style="margin: 10px">
              <v-btn-toggle borderless>
                <v-btn @click="onLoadRouteClicked" color="secondary" plain>
                  <v-icon left>mdi-pencil</v-icon>
                  Load
                </v-btn>
                <v-btn @click="onSavePromptClicked" color="success" plain>
                  <v-icon left>mdi-content-save</v-icon>
                  Save
                </v-btn>
                <v-btn @click="onDeletePromptClicked" color="error" plain>
                  <v-icon left>mdi-close</v-icon>
                  Delete
                </v-btn>
                
                <v-spacer>
                </v-spacer>
                
                <v-btn @click="onResetClicked" color="primary" plain>
                  <v-icon left>mdi-backup-restore</v-icon>
                  Use Defaults
                </v-btn>
              </v-btn-toggle>
            </v-row>
          </v-form>
        </v-card>

        <!-- BOSS / DELTA TABLE -->
        <v-data-table
          hide-default-footer
          id="bossTable"
          :headers="bossHeaders"
          :items="bossRows"
        >
          <template v-slot:[`item.delta`]="{ item }">
            <v-chip :color="getDeltaColor(item.delta)" dark>
              {{ item.delta }}
            </v-chip>
          </template>
        </v-data-table>
      </v-col>

      <!-- SPIRIT TABLE AREA -->
      <v-col cols="8">
        <v-card>
          <!-- BOSS FILTER -->
          <v-tabs dark background-color="secondary" show-arrows>
            <v-tabs-slider color="teal lighten-3"></v-tabs-slider>

            <v-tab
              v-for="boss in bosses"
              :key="boss.name"
              :href="'#tab-' + boss.name"
              @click="onBossTabClicked(boss)"
            >
              {{ boss.name }}
            </v-tab>
          </v-tabs>

          <!-- AREA FILTER -->
          <v-tabs dark background-color="secondary" show-arrows>
            <v-tabs-slider color="teal lighten-3"></v-tabs-slider>

            <v-tab
              v-for="area in areas"
              :key="area"
              :href="'#tab-' + area"
              @click="onAreaTabClicked(area)"
            >
              {{ area }}
            </v-tab>
          </v-tabs>
        </v-card>
        <v-data-table
          v-model="selectedModel"
          :items="spiritRows"
          :headers="spiritHeaders"
          :search="search"
          item-key="index"
          show-select
          class="elevation-1"
          disable-pagination
          :items-per-page="50"
          :hide-default-footer="true"
        >
          <template>
            <v-simple-checkbox
              color="green"
              v-on="onSpiritSelected(selectedModel)"
            ></v-simple-checkbox>
          </template>
        </v-data-table>
        <div></div>
      </v-col>

      <br />
      <hr />
    </v-row>

    <!-- Save Prompt -->
    <v-dialog v-model="savePrompt" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2"> Save Route </v-card-title>

        <v-card-text>
          <v-form ref="form" :value="saveNameIsValid" lazy-validation>
            <v-text-field
              v-model="form.routeName"
              color="purple darken-2"
              label="Route Name"
              required
            />
          </v-form>
          <br />
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="success"
            :disabled="!saveNameIsValid"
            @click="onSaveRouteClicked"
          >
            Save Route
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import global from "../globalActions";

import factory from "../quest/factory";
import constants from "../quest/constants";
import bosses from "../quest/bosses";
import util from "../quest/util";
import spirits from "../quest/spirits";
import io from "../quest/io";

const DEFAULT_ROUTE_NAME = "New Route";
const DEFAULT_JP = false;
const DEFAULT_EARLY_ESCAPE = true;
const DEFAULT_XP_SOLVARING = 77;
const DEFAULT_XP_ZELSE_ESCAPE = 605;
const DEFAULT_XP_ZELSE_NORMAL = 140;
const DEFAULT_XP_ZELSE = DEFAULT_EARLY_ESCAPE
  ? DEFAULT_XP_ZELSE_ESCAPE
  : DEFAULT_XP_ZELSE_NORMAL;

let presetRoutes = io.loadRoutes();

let areas = [...new Set(spirits.map((spirit) => spirit.name))];

let spiritRows = spirits.map((spirit, k) => ({
  ...spirit,
  chosen: spirit.core,
  index: k,
}));

let selectedSpirits = spiritRows.filter((row) => row.chosen);

let form = {
  solvaring: DEFAULT_XP_SOLVARING,
  zelse: DEFAULT_XP_ZELSE,
  earlyEscape: DEFAULT_EARLY_ESCAPE,
  jp: DEFAULT_JP,
  extraSpirits: 0,
  fewerRocks: 0,
  routeName: DEFAULT_ROUTE_NAME,
  routeSelected: undefined,
};

export default {
  name: "QuestPlanner",

  data: () => ({
    counter: 1,

    spiritRows,
    selectedModel: selectedSpirits,

    spiritHeaders: [
      { text: "Name", value: "name" },
      { text: "Boss", value: "area" },
      { text: "Description", value: "description" },
      { text: "Core?", value: "core" },
    ],

    bossHeaders: [
      { text: "Boss", value: "name" },
      { text: "HP", value: "health" },
      // { text: "AGI", value: "agility" },
      // { text: "DEF", value: "defense" },
      {
        text: "E",
        value: "spirits.EARTH",
        icon: "../assets/crystal-earth.png",
      },
      {
        text: "W",
        value: "spirits.WATER",
        icon: "../assets/crystal-water.png",
      },
      { text: "F", value: "spirits.FIRE", icon: "../assets/crystal-fire.png" },
      { text: "A", value: "spirits.AIR", icon: "../assets/crystal-wind.png" },
      { text: "Core", value: "coreHits" },
      { text: "Route", value: "routeHits" },
      { text: "+/-", value: "delta" },
    ],

    singleSelect: false,

    savePrompt: false,
    deletePrompt: false,

    form,
    areas,
    bosses,
    presetRoutes,
    componentKey: 0,
    search: "Solvaring",
  }),

  computed: {
    formIsValid() {
      return form.solvaring && form.zelse;
    },

    saveNameIsValid() {
      if (form.routeName == undefined) form.routeName = DEFAULT_ROUTE_NAME;

      let nonzeroLength = form.routeName.length > 0;
      // let unique =
      //   presetRoutes.filter((route) => route.name == form.routeName).length == 0;

      return nonzeroLength;
    },

    bossRows() {
      let baseSpirits = factory.createSpirits(1, 1, 1, 1);
      let coreBrian = factory.createBrian({ ...baseSpirits }, 0);
      let routeBrian = factory.createBrian({ ...baseSpirits }, 0);

      let previousBossXP = 0;

      let rows = bosses.map((boss) => {
        if (boss.name == constants.BOSS_NAMES.SOLVARING) {
          let formValue = form.solvaring;
          let grindXP = formValue ? Number.parseInt(formValue) : 0;

          util.addExperience(coreBrian, grindXP, form.earlyEscape);
          util.addExperience(routeBrian, grindXP, form.earlyEscape);
        }

        if (boss.name == constants.BOSS_NAMES.ZELSE) {
          let formValue = form.zelse;
          let grindXP = formValue ? Number.parseInt(formValue) : 0;

          util.addExperience(coreBrian, grindXP, form.earlyEscape);
          util.addExperience(routeBrian, grindXP, form.earlyEscape);
        }

        spiritRows.forEach((row) => {
          if (row.area == boss.name && row.core)
            util.addBonusSpirit(coreBrian.spirits, form.earlyEscape);
        });

        this.selectedModel.forEach((row) => {
          if (row.area == boss.name) {
            util.addBonusSpirit(routeBrian.spirits, form.earlyEscape);
            routeSpiritCount += 1;
          }
        });

        util.addExperience(coreBrian, previousBossXP, form.earlyEscape);
        util.addExperience(routeBrian, previousBossXP, form.earlyEscape);

        previousBossXP = boss.xp;

        return util.calculateBossRow(coreBrian, routeBrian, boss, form.jp);
      });

      // Summary data
      let coreSpiritCount = spirits.filter((spirit) => spirit.core).length;
      let routeSpiritCount = this.selectedModel.length;

      let coreRockCount = rows
        .map((row) => row.coreHits)
        .reduce((a, b) => a + b);
      let routeRockCount = rows
        .map((row) => row.routeHits)
        .reduce((a, b) => a + b);

      form.fewerRocks = routeRockCount - coreRockCount;
      form.extraSpirits = routeSpiritCount - coreSpiritCount;

      return rows;
    },
  },

  methods: {
    openSnackbar(message) {
      global.showSnackbar(message);
    },

    onAreaTabClicked(area) {
      this.search = area;
    },
    onBossTabClicked(boss) {
      this.search = boss.name;
    },
    onResetClicked() {
      form.earlyEscape = DEFAULT_EARLY_ESCAPE;
      form.jp = DEFAULT_JP;
      form.zelse = DEFAULT_XP_ZELSE;
      form.solvaring = DEFAULT_XP_SOLVARING;

      this.selectedModel = spiritRows.filter((row) => row.core);
    },

    getCurrentRoute() {
      return {
        name: form.routeName,

        solvaring: form.solvaring,
        zelse: form.zelse,

        earlyEscape: form.earlyEscape,
        jp: form.jp,

        spirits: this.selectedModel.map((row) => row.index),
      };
    },

    setCurrentRoute(route) {
      form.name = route.name;

      form.solvaring = route.solvaring;
      form.zelse = route.zelse;

      form.earlyEscape = route.earlyEscape;
      form.jp = route.jp;

      this.selectedModel = spiritRows.filter(
        (row) => route.spirits.indexOf(row.index) >= 0
      );
    },

    onRouteSelected() {
      this.loadCurrentRoute();
    },

    onLoadRouteClicked() {
      this.loadCurrentRoute();
    },

    onSavePromptClicked() {
      console.log("SAVE PROMPT CLICKED");

      form.routeName = form.routeSelected;
      this.savePrompt = true;
    },

    onSaveRouteClicked() {
      console.log("SAVE ROUTE CLICKED");

      io.saveRoute(
        form.routeName,
        form.jp,
        form.earlyEscape,
        form.solvaring,
        form.zelse,
        this.selectedModel
      );

      this.savePrompt = false;
      this.presetRoutes = io.loadRoutes();

      console.log("[IO] Current Routes: ", this.presetRoutes.length);

      let routeIndex = io.getRouteIndex(form.routeName);
      form.routeSelected = this.presetRoutes[routeIndex];

      this.openSnackbar("Route Saved");
    },

    loadCurrentRoute() {
      if (form.routeSelected == undefined) {
        global.showSnackbar("No Route Selected");
        return;
      }

      let knownRoutes = io.loadRoutes();
      let route = knownRoutes.filter(r => r.name == form.routeSelected.name)[0];

      if (route != undefined) {
        this.setCurrentRoute(route);
        global.showSnackbar("Route Loaded");
      } else {
        global.showSnackbar("Couldn't Find Route to Load?");
      }
    },

    onDeletePromptClicked() {
      let routeExists = io.getRouteIndex(form.routeSelected) >= 0;
      if (routeExists == false) {
        global.showSnackbar("Route Unknown, Could Not Delete?");
        return;
      }

      let confirmed = confirm(`Delete route "${form.routeSelected}"?`);
      if (!confirmed) return;

      var success = io.deleteRoute(form.routeSelected);
      if (success) {
        this.presetRoutes = io.loadRoutes();
        global.showSnackbar("Route Deleted");
      }
    },

    onEscapeSwitchChanged() {
      this.reset();
    },
    onJPSwitchChanged() {
      this.reset();
    },

    onSpiritSelected(arr) {
      console.log(arr.length, this.selectedModel.length);
    },

    forceRerender() {
      this.componentKey += 1;
    },

    getDeltaColor(delta) {
      if (delta <= -4) return "teal";
      else if (delta < 0) return "green";
      else if (delta == 0) return "grey";
      else return "red";
    },
  },
};
</script>
