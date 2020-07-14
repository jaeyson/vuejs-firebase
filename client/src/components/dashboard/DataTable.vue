<template>
  <div class="content-body">
    <h3>All Lead Details</h3>
    <div class="row">
      <div class="col">
        <v-text-field
          class="blue-input"
          label="SHOW"
          max="50"
          min="10"
          step="5"
          style="width: 115px"
          type="number"
          placeholder=" "
          @keydown="false"
        ></v-text-field>
      </div>
      <div class="col">
        <v-text-field
          class="blue-input"
          v-model="search"
          label="SEARCH:"
          style="width: 150px;"
          placeholder=" "
        ></v-text-field>
      </div>
    </div>

    <div class="row">
      <v-data-table
        :headers="headers"
        :items="leads"
        :search="search"
        :total-visible="1"
        :pagination.sync="pagination"
        loading="true"
        class="table"
        id="example"
      ></v-data-table>
      <!--
      <v-pagination v-model="leads" class="my-4" :length="2"></v-pagination>
      -->
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  methods: {
    getDate(startDate) {
      const date = new Date(startDate);
      const year = date.getFullYear();
      const month = date.getMonth() + 1; //first month starts at 0
      const day = date.getDate();
      // [year,month,day] = [date.getFullYear(), date.getMonth(), date.getDate()]
      return `${month}/${day}/${year}`;
    },
    getStatus: code =>
      ({
        "-1": "Invalid",
        "0": "Blocked",
        "1": "Valid"
      }[code.toString()]), //showErrorMessage(error.code)
    getSystemNote: code =>
      ({
        "0": "None",
        "1": "Additional data available",
        "2": "Country blocked",
        "3": "Address does not exist",
        "4": "Domain does not exist",
        "5": "Blocked by user"
      }[code.toString()]) //showErrorMessage(error.code)
  },
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: true,
          value: "name"
        },
        { text: "Email Address", value: "email" },
        { text: "Status", value: "status" },
        { text: "Form ID", value: "formID" },
        { text: "IP Address", value: "ipAddress" },
        { text: "Optin Date", value: "optinDate" },
        { text: "System Notes", value: "systemNotes" }
      ],
      leads: [
        {
          name: "Airi Satou",
          email: "airisatou@gmail.com",
          status: this.getStatus(1),
          formID: "VD1-0151378239",
          ipAddress: "192.155.45.13",
          optinDate: this.getDate("11/28/2019"),
          systemNotes: this.getSystemNote(0)
        },
        {
          name: "Ashton Cox",
          email: "ashtonC@apexmarketing.com",
          status: this.getStatus(1),
          formID: "CF1-0344137829",
          ipAddress: "192.168.112.48",
          optinDate: this.getDate("01/12/2020"),
          systemNotes: this.getSystemNote(1)
        },
        {
          name: "Brielle Williamson",
          email: "brielw@yahoo.com",
          status: this.getStatus(1),
          formID: "VD1-9871231305",
          ipAddress: "126.24.164.11",
          optinDate: this.getDate("12/02/2019"),
          systemNotes: this.getSystemNote(0)
        },
        {
          name: "Cedric Kelly",
          email: "cedrick@findingmydog.com",
          status: this.getStatus(0),
          formID: "CF1-0581468155",
          ipAddress: "126.188.112.0",
          optinDate: this.getDate("03/29/2020"),
          systemNotes: this.getSystemNote(2)
        },
        {
          name: "Donna Snider",
          email: "donna.snider@gmail.com",
          status: this.getStatus(-1),
          formID: "TD1-0855187132",
          ipAddress: "192.27.55.14",
          optinDate: this.getDate("01/25/2020"),
          systemNotes: this.getSystemNote(3)
        },
        {
          name: "Garrett Winters",
          email: "garrett@bigboxcpa.com",
          status: this.getStatus(-1),
          formID: "TD1-0189712384",
          ipAddress: "192.168.42.11",
          optinDate: this.getDate("07/03/2019"),
          systemNotes: this.getSystemNote(0)
        },
        {
          name: "Michael Bruce",
          email: "mike.bruce@yomama.com",
          status: this.getStatus(-1),
          formID: "TD1-1500982275",
          ipAddress: "168.29.121.1",
          optinDate: this.getDate("06/27/2019"),
          systemNotes: this.getSystemNote(4)
        },
        {
          name: "Shad Decker",
          email: "shadd@hotmail.com",
          status: this.getStatus(1),
          formID: "VD1-0251793241",
          ipAddress: "126.192.44.12",
          optinDate: this.getDate("11/13/2019"),
          systemNotes: this.getSystemNote(5)
        },
        {
          name: "Tiger Nixon",
          email: "tiger@itsystemscorp.com",
          status: this.getStatus(1),
          formID: "VD1-8941232411",
          ipAddress: "192.168.14.62",
          optinDate: this.getDate("04/25/2020"),
          systemNotes: this.getSystemNote(1)
        }
        // "0": "None",
        // "1": "Additional data available",
        // "2": "Country blocked",
        // "3": "Address does not exist",
        // "4": "Domain does not exist",
        // "5": "Blocked by user",
        // "-1": "Invalid",
        // "0": "Blocked",
        // "1": "Valid",
      ]
    };
  }
};
</script>
