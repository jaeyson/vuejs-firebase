<template>
  <div class="wrapper">
    <div class="inner-wrapper">
      <section class="auth-page mb-0">
        <div class="container-fluid">
          <div class="content-wrapper mt-100">
            <div class="content box col-md-6 offset-md-3">
              <div class="auth-header">
                <img
                  style="width: 170px"
                  class="mx-auto d-block"
                  src="http://verifieddata.io/assets/images/logo.png"
                />
              </div>
              <div class="auth-form">
                <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Enter email"
                      value=""
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      value=""
                    />
                  </div>
                  <div class="form-group" style="min-height: 50px;">
                    <button class="btn btn-primary float-right">
                      LOG IN
                    </button>
                  </div>
                </form>
              </div>
              <div class="auth-footer mt-30">
                <div class="">
                  <a href="#">Forgot Password?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>
