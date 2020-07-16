<template>
  <div class="wrapper">
    <div class="inner-wrapper">
      <section class="auth-page mb-0">
        <div class="container-fluid">
          <div class="content-wrapper mt-100">
            <v-alert outlined type="warning" border="left" v-if="!!message">
              {{ message }}
            </v-alert>
            <div class="content box col-md-6 offset-md-3">
              <div class="auth-header">
                <img
                  style="width: 170px"
                  class="mx-auto d-block"
                  src="http://verifieddata.io/assets/images/logo.png"
                />
              </div>
              <div class="auth-form">
                <v-form v-model="valid" ref="form">
                  <div class="form-group">
                    <v-text-field
                      v-model="email"
                      label="Email"
                      type="email"
                      required
                      placeholder="bad.luck@bri.an"
                    ></v-text-field>
                  </div>
                  <div class="form-group">
                    <v-text-field
                      v-model="password"
                      label="Password"
                      type="password"
                      required
                      placeholder="**************"
                    ></v-text-field>
                  </div>
                  <div class="form-group" style="min-height: 50px;">
                    <v-btn
                      :disabled="!valid"
                      @click="signIn"
                      class="btn btn-primary float-right"
                    >
                      LOG IN
                    </v-btn>
                  </div>
                </v-form>
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
  data: function() {
    return {
      response: "No data yet...",
      authStatus: "no auth status",
      valid: false,
      message: this.$store.state.message,
      email: "",
      password: ""
    };
  },
  methods: {
    signIn() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("userLogin", {
          email: this.email,
          password: this.password
        });
        // this.$refs.form.reset();
      }
    }
  }
};
</script>
