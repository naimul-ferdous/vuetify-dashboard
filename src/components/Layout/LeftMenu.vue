<template lang="">
  <v-navigation-drawer style="max-height: unset !important" height="100%" color="#343a40" dark permanent app>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6"> CCA </v-list-item-title>
        <v-list-item-subtitle>
          Controller Of Certifying Authorities
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider>
    </v-divider>

    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Project Management", icon: "mdi-chart-pie" },
        { title: "Budget Management", icon: "mdi-tree" },
        { title: "Commercial", icon: "mdi-content-copy" },
        { title: "Purchase Management", icon: "mdi-square-edit-outline" },
        { title: "Store Management", icon: "mdi-table" },
        { title: "Finance and Accounts", icon: "mdi-calendar-month" },
        { title: "HRM", icon: "mdi-book-open" },
        { title: "Payroll", icon: "mdi-credit-card-outline" },
        { title: "Settings", icon: "mdi-cog" },
        { title: "Logout", icon: "mdi-logout" },
      ],
      right: null,
    };
  },
};
</script>
<style lang=""></style>
