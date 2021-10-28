<template>
  <!-- App.vue -->

  <v-app>
    <LeftMenu />

    <AppBar />

    <!-- Sizes your content based upon application components -->
    <v-main class="mainSection">
      <BreadCrumb />

      <!-- <v-content style="border: 2px solid red">
       
      </v-content> -->
      <router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import LeftMenu from "./components/Layout/LeftMenu";
import AppBar from "./components/Layout/AppBar";
import Footer from "./components/Layout/Footer";
import BreadCrumb from "./components/Layout/BreadCrumb";
export default {
  name: "App",

  data: () => ({
    //
  }),

  components: {
    LeftMenu,
    AppBar,
    Footer,
    BreadCrumb,
  },
};
</script>

<style scoped>
.mainSection {
  background: #f4f6f9;
}
</style>
