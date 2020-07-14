<template>
  <div class="wrapper">
    <div class="inner-wrapper">
      <Sidebar />
      <Forms />
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Forms from "@/components/forms/";

export default {
  components: {
    Sidebar,
    Forms
  }
};
</script>
