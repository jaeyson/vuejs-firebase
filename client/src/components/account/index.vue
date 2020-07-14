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
import TopHeader from "@/components/account/TopHeader";
import Content from "@/components/account/Content";

export default {
  name: "Account",
  components: {
    TopHeader,
    Content
  }
};
</script>
