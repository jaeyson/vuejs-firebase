<template>
  <v-app>
    <!-- <HelloWorld /> -->
    <!--
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    -->
    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>
