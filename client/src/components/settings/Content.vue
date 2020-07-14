<template>
  <div class="content-body">
    <div class="row">
      <div class="col-md-8">
        <div class="box shadow-light br-8">
          <div class="separator">
            <h3 class="mt-30">System-Wide Settings</h3>
            <div class="separator">
              <h6>Use Country Blocking Feature</h6>
              <div class="row">
                <div class="form-group col-md-8">
                  <p class="text-muted mb-0">
                    This optional feature will turn on the ability to block
                    selected countries from opting into your forms.
                  </p>

                  <div class="switch-container">
                    <input
                      id="switch-shadow"
                      class="switch-input switch-fill"
                      type="checkbox"
                    />
                    <label for="switch-shadow"></label>
                  </div>
                </div>
              </div>
            </div>
            <div class="separator">
              <h6>Use Contact Lead Data Append Feature</h6>
              <div class="row">
                <div class="form-group col-md-8">
                  <p class="text-muted mb-0">
                    This optional feature will add relevant data to your contact
                    records providing more data bout your leads.
                  </p>

                  <div class="switch-container">
                    <input
                      id="switch-shadow"
                      class="switch-input switch-fill"
                      type="checkbox"
                    />
                    <label for="switch-shadow"></label>
                  </div>
                </div>
              </div>
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
