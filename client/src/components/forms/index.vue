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
import TopHeader from "@/components/forms/TopHeader";
import Content from "@/components/forms/Content";

export default {
  name: "Forms",
  components: {
    TopHeader,
    Content
  }
};
</script>
