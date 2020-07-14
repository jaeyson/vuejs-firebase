<template>
  <div>
    <div class="content-header">
      <div class="content-heading">
        <div
          class="heading-icon d-flex justify-content-center align-items-center"
        >
          <i class="fas fa-chart-bar"> </i>
        </div>
        <div class="heading-text">
          <h3>
            Dashboard
          </h3>
          <p>
            Summary All Leads and Activity.
          </p>
        </div>
      </div>
    </div>
    <div class="content-body">
      <div class="row">
        <div class="col-md-3">
          <div class="card card-stats shadow-light">
            <div class="card-body">
              <div class="row">
                <div class="col">
                  <h5 class="card-title text-uppercase text-muted mb-0 h6">
                    Total Leads
                  </h5>
                  <span class="h4 font-weight-bold mb-0">
                    3,897
                  </span>
                </div>
                <div class="col-auto">
                  <div
                    class="icon icon-shape bg-danger text-white rounded-circle shadow"
                  >
                    <i class="fas fa-chart-bar"> </i>
                  </div>
                </div>
              </div>
              <p class="mt-3 mb-0 text-muted text-sm">
                <span class="text-success mr-2">
                  <i class="fa fa-arrow-up"> </i>
                  3.48%
                </span>
                <span class="text-nowrap">
                  Last 30 Days
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card card-stats shadow-light">
            <div class="card-body">
              <div class="row">
                <div class="col">
                  <h5 class="card-title text-uppercase text-muted mb-0 h6">
                    Valid Leads
                  </h5>
                  <span class="h4 font-weight-bold mb-0">
                    3,756
                  </span>
                </div>
                <div class="col-auto">
                  <div
                    class="icon icon-shape bg-warning text-white rounded-circle shadow"
                  >
                    <i class="fas fa-chart-pie"> </i>
                  </div>
                </div>
              </div>
              <p class="mt-3 mb-0 text-muted text-sm">
                <span class="text-danger mr-2">
                  <i class="fa fa-arrow-down"> </i>
                  1.20%
                </span>
                <span class="text-nowrap text-left">
                  Last 30 Days
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card card-stats shadow-light">
            <div class="card-body">
              <div class="row">
                <div class="col">
                  <h5 class="card-title text-uppercase text-muted mb-0 h6">
                    Invalid Leads
                  </h5>
                  <span class="h4 font-weight-bold mb-0">
                    141
                  </span>
                </div>
                <div class="col-auto">
                  <div
                    class="icon icon-shape bg-success text-white rounded-circle shadow"
                  >
                    <i class="fas fa-users"> </i>
                  </div>
                </div>
              </div>
              <p class="mt-3 mb-0 text-muted text-sm">
                <span class="text-danger mr-2">
                  <i class="fa fa-arrow-down"> </i>
                  3.42%
                </span>
                <span class="text-nowrap text-left">
                  Last 30 Days
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card card-stats shadow-light">
            <div class="card-body">
              <div class="row">
                <div class="col">
                  <h5 class="card-title text-uppercase text-muted mb-0 h6">
                    Blocked Leads
                  </h5>
                  <span class="h4 font-weight-bold mb-0">
                    49
                  </span>
                </div>
                <div class="col-auto">
                  <div
                    class="icon icon-shape bg-info text-white rounded-circle shadow"
                  >
                    <i class="fas fa-percent"> </i>
                  </div>
                </div>
              </div>
              <p class="mt-3 mb-0 text-muted text-sm">
                <span class="text-success mr-2">
                  <i class="fa fa-arrow-up"> </i>
                  12.0%
                </span>
                <span class="text-nowrap text-left">
                  Last 30 Days
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {}
};
</script>
