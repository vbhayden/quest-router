<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="secondary" dark v-bind="attrs" v-on="on"> About </v-btn>
    </template>

    <v-card>
      <v-card-title class="text-h5 grey lighten-2">
        What is this?
      </v-card-title>

      <v-card-text>
        <br />
        A web tool for comparing possible routes for running Quest 64.
        <br /><br />

        Given the ongoing effort to reduce the game's overall randomness for
        speedrunning, I wanted to make something that enabled our community to
        see the impacts of collection decisions over the course of a run.
        <br /><br />

        Things like simulating combat might be added later, but for now we will
        just be assigning time additions for spirits and then computing the
        total number of rocks required for each boss as a result.
        
        <br /><br />
        This page doesn't work well on mobile. 😬
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false"> Close </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data: () => ({
    dialog: false
  })
};
</script>