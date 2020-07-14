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
import TopHeader from "@/components/integrations/TopHeader";
import Content from "@/components/integrations/Content";

export default {
  name: "Integrations",
  components: {
    TopHeader,
    Content
  }
};
</script>
