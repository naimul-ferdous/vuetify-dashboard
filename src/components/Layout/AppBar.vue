<template lang="">
  <v-app-bar
    height="67" 
    app
  >
    <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
    <div class="d-flex">
      <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Contact</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    </div>
   
      <v-list-item-group class="d-flex ml-auto" v-model="model">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <!-- <v-list-item-icon> -->
            <v-icon v-text="item.icon"></v-icon>
          <!-- </v-list-item-icon> -->
          <!-- <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content> -->
        </v-list-item>
      </v-list-item-group>
   
    
     
  </v-app-bar>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        icon: "mdi-magnify",
        text: "Search",
      },
      {
        icon: "mdi-comment-multiple",
        text: "Messages",
      },
      {
        icon: "mdi-bell",
        text: "Notifications",
      },
      {
        icon: "mdi-arrow-expand-all",
        text: "Expand",
      },
      {
        icon: "mdi-view-grid",
        text: "Grid View",
      },
    ],
    model: 1,
  }),
};
</script>
<style lang="">
</style>
