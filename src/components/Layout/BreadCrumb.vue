<template lang="">
    <div class="breadcrumb">
      
      <h2 class="breadTitle">{{$route.name}}</h2>
        <v-breadcrumbs :items="items">
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item
        :href="item.href"
        :disabled="item.disabled"
      >
        {{ item.text.toUpperCase() }}
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
    </div>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        text: "Dashboard",
        disabled: false,
        href: "/",
      },
      {
        text: "Dashboard",
        disabled: true,
        href: "dashboard",
      },
    ],
  }),
  methods: {},
  created() {},
  computed: {},
};
</script>

<style scoped>
.breadcrumb {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}

.breadTitle {
  text-transform: capitalize;
}
</style>