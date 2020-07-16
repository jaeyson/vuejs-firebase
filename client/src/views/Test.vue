<template>
  <v-form v-model="valid" ref="form">
    <v-container>
      <h3>{{ this.$store.state.result }}</h3>
      <v-row>
        <v-text-field
          v-model="name"
          label="Name"
          required
          placeholder="Bad Luck Brian :("
        ></v-text-field>
      </v-row>
      <v-row>
        <v-btn :disabled="!valid" @click="checkName" color="primary">
          check name
        </v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: function() {
    return {
      response: "No data yet...",
      authStatus: "no auth status",
      valid: false,
      name: ""
    };
  },
  methods: {
    checkName() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("checkName", {
          name: this.name
        });
      }
      // this.$refs.form.reset();
    }
  }
};
</script>
