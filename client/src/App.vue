<template>
  <v-app>
    <!-- <HelloWorld /> -->
    <!--
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    -->
    <v-main transition="slide-x-transition">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>
