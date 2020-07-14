<template>
  <header class="sidebar-wrapper">
    <!-- Sidebar -->
    <div class="sidebar-wrapper-inner">
      <nav
        class="navbar navbar-expand-lg navbar-light bg-light"
        style="display: none;"
      >
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
          class="navbar-toggler"
          data-target="#navbarNavDropdown"
          data-toggle="collapse"
          type="button"
        >
          <span class="navbar-toggler-icon"> </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home
                <span class="sr-only">
                  (current)
                </span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Features
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="navbar navbar-expand-lg navbar-light">
        <div class="logo-header">
          <a class="navbar-brand" href="index.html">
            <img src="http://verifieddata.io/assets/images/logo.png" />
          </a>
        </div>
        <!-- <div class="navbar navbar-expand-lg navbar-light"> -->
        <button
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
          class="navbar-toggler"
          data-target="#navbarNavDropdown1"
          data-toggle="collapse"
          type="button"
        >
          <span class="navbar-toggler-icon"> </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown1">
          <ul class="sidebar-nav">
            <li>
              <router-link to="/">
                <i class="fas fa-chart-bar"> </i>
              </router-link>
              <!--
              <a href="/" title="Dashboard">
              </a>
              -->
            </li>
            <li>
              <router-link to="/integrations">
                <i class="fas fa-cog"> </i>
              </router-link>
              <!--
              <a href="/integrations" title="Integrations">
              </a>
              -->
            </li>
            <li>
              <router-link to="/forms">
                <i class="fas fa-envelope-open-text"> </i>
              </router-link>
              <!--
              <a href="/forms" title="Forms">
              </a>
              -->
            </li>
            <li>
              <router-link to="/settings">
                <i class="fas fa-list"> </i>
              </router-link>
              <!--
              <a href="/settings" title="Settings">
              </a>
              -->
            </li>
            <li>
              <router-link to="/support">
                <i class="fas fa-life-ring"> </i>
              </router-link>
              <!--
              <a href="/support" title="Help & Support">
              </a>
              -->
            </li>
            <li>
              <router-link to="/my-account">
                <i class="fas fa-user-circle"> </i>
              </router-link>
              <!--
              <a href="/my-account" title="My Account">
              </a>
              -->
            </li>
            <li>
              <router-link to="/login">
                <i class="fas fa-sign-out-alt"> </i>
              </router-link>
              <!--
              <a href="/login" title="Logout">
              </a>
              -->
            </li>
          </ul>
        </div>
        <!-- </div> -->
      </div>
    </div>
    <!-- End Navbar Sidebar -->
    <div id="navbar-title">
      <h5></h5>
    </div>
  </header>
</template>

<script>
export default {
  components: {},
  methods: {},
  data: function() {
    return {};
  }
};
</script>
