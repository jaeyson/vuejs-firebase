<template>
  <div class="wrapper">
    <div class="inner-wrapper">
      <Sidebar />
      <Settings />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld";
import Sidebar from "@/components/Sidebar";
import Settings from "@/components/settings/";

export default {
  components: {
    // HelloWorld,
    Sidebar,
    Settings
  }
};
</script>
