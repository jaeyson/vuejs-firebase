<template>
  <div class="wrapper">
    <div class="inner-wrapper">
      <Sidebar />
      <Account />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld";
import Sidebar from "@/components/Sidebar";
import Account from "@/components/account/";

export default {
  components: {
    // HelloWorld,
    Sidebar,
    Account
  }
};
</script>
