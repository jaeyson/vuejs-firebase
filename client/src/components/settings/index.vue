<template>
  <section class="page-content">
    <div class="container-fluid">
      <div class="content-wrapper">
        <div class="content">
          <TopHeader />
          <Content />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import TopHeader from "@/components/settings/TopHeader";
import Content from "@/components/settings/Content";

export default {
  name: "Settings",
  components: {
    TopHeader,
    Content
  }
};
</script>
