<template>
  <div class="wrapper">
    <div class="inner-wrapper">
      <Sidebar />
      <Support />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld";
import Sidebar from "@/components/Sidebar";
import Support from "@/components/support/";

export default {
  components: {
    // HelloWorld,
    Sidebar,
    Support
  }
};
</script>
