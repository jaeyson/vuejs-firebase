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
import TopHeader from "@/components/support/TopHeader";
import Content from "@/components/support/Content";

export default {
  name: "Support",
  components: {
    TopHeader,
    Content
  }
};
</script>
