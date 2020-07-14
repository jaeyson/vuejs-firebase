<template>
  <section class="page-content">
    <div class="container-fluid">
      <div class="content-wrapper">
        <div class="content">
          <TopHeader />
          <DataTable />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import TopHeader from "@/components/dashboard/TopHeader";
import DataTable from "@/components/dashboard/DataTable";

export default {
  name: "Dashboard",
  components: {
    TopHeader,
    DataTable
  }
};
</script>
