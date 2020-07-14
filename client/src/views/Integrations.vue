<template>
  <div class="wrapper">
    <div class="inner-wrapper">
      <Sidebar />
      <Integrations />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld";
import Sidebar from "@/components/Sidebar";
import Integrations from "@/components/integrations/";

export default {
  components: {
    Sidebar,
    Integrations
  }
};
</script>
