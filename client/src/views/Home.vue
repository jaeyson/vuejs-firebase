<template>
  <div class="wrapper">
    <div class="inner-wrapper">
      <Sidebar />
      <Dashboard />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld";
import Sidebar from "@/components/Sidebar";
import Dashboard from "@/components/dashboard/";

export default {
  components: {
    // HelloWorld,
    Sidebar,
    Dashboard
  }
};
</script>
