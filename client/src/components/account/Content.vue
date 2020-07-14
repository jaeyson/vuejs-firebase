<template>
  <div class="content-body">
    <div class="row">
      <div class="col-md-8">
        <div class="box shadow-light br-8">
          <div>
            <div class="separator">
              <form class="row">
                <div class="col-md-12 mb-2 text-secondary">
                  <h6>User Information</h6>
                </div>

                <div class="form-group col-md-6">
                  <label>First Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First Name"
                    value="John"
                  />
                </div>

                <div class="form-group col-md-6">
                  <label>Last Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last Name"
                    value="Doe"
                  />
                </div>

                <div class="form-group col-md-6">
                  <label>Username</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                    value="john.doe"
                  />
                </div>

                <div class="form-group col-md-6">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Enter email"
                    value="john.doe@email.com"
                  />
                </div>

                <div class="col-md-12">
                  <hr />
                </div>

                <div class="col-md-12 mt-2 mb-2 text-secondary">
                  <h6>Reset Password</h6>
                </div>

                <div class="form-group col-md-6">
                  <label>Password</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    value="12345678"
                  />
                </div>

                <div class="form-group col-md-6">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Confirm Password"
                    value="12345678"
                  />
                </div>

                <div class="col-md-12">
                  <button type="" class="btn btn-primary btn-fill float-right">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="box shadow-light br-8">
          <div class="justify-content-center">
            <img
              class="rounded-circle mx-auto d-block"
              src="http://verifieddata.io/assets/images/profile.png"
            />
          </div>

          <div class="row text-center mt-3">
            <div class="col-md-12">
              <strong><h4 class="mb-0">John Doe</h4></strong>
              <small><p class="text-secondary">Houstom, TX</p></small>
            </div>

            <div class="col-md-12">
              <hr />
            </div>

            <div class="col-md-12">
              <p class="text-secondary">
                Proident sint dolor nisi deserunt nulla adipisicing ex voluptate
                quis voluptate voluptate adipisicing nisi eiusmod ea pariatur
                tempor occaecat aute do pariatur nisi fugiat fugiat cillum
                reprehenderit in do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
