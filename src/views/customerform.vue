<template>
  <v-toolbar color="white">
    <v-row>
      <v-dialog v-model="dialogs" persistent width="1024">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props">
            <v-icon color="secondary-darken-1">mdi-plus-circle</v-icon>
            Add Data
          </v-btn>
        </template>
        <v-card class="total">
          <v-card-title class="cardTitle" style="background-color: #018786;">
            <span class="text-h5">Add Customer</span>
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="addCustomer">
              <v-text-field
                v-model="customerInput.customerId"
                label="Customer ID"
                dense
              ></v-text-field>
              <v-text-field
                v-model="customerInput.firstName"
                label="First Name"
                dense
              ></v-text-field>
              <v-text-field
                v-model="customerInput.lastName"
                label="Last Name"
                dense
              ></v-text-field>
              <v-text-field
                v-model="customerInput.email"
                label="Email"
                dense
              ></v-text-field>
              <v-text-field
                v-model="customerInput.phone"
                label="Phone Number"
                dense
              ></v-text-field>
              <v-text-field
                v-model="customerInput.address"
                label="Address"
                dense
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue-darken-1"
              variant="text"
              @click="dialogs = false"
            >
              Close
            </v-btn>
            <v-btn
              variant="text"
              type="submit"
              color="secondary-darken-1"
              @click="addCustomer(), (dialogs = false)"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-btn @click="saveToStorage(), savedDialog()">
        <v-icon
          size="large"
          color="secondary-darken-1"
          icon="mdi-content-save-all"
        ></v-icon>
        save
      </v-btn>
      <v-dialog v-model="dialogss" max-width="300px">
        <v-card>
          <v-card-title class="cardTitle"  style="background-color: #018786;"> Record Status </v-card-title>
          <v-card-text>
            Record Saved
          </v-card-text>
         
        </v-card>
      </v-dialog>
      
      <v-btn @click="exportToCSV()">
        <v-icon
          size="large"
          color="secondary-darken-1"
          icon="mdi-message-text"
        ></v-icon>
        Export
      </v-btn>

      <v-btn @click="confirmDelete()">
        <v-icon
          size="large"
          color="secondary-darken-1"
          icon="mdi-trash-can-outline"
        ></v-icon>
        Clear Table
      </v-btn>
      <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-card-title class="cardTitle" style="background-color: #018786;"> Confirm Deletion </v-card-title>
          <v-card-text>
            Are you sure you want to delete all the Customer Records?
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="deleteAll">Yes</v-btn>
            <v-btn color="red" text @click="dialog = false">No</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-toolbar>

  <div class="table-container">
    <v-simple-table color="secondary-darken-1">
      <thead>
        <tr>
          <th>S/N</th>
          <th>Customer ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(customer, index) in customers"
          :key="index"
          class="table-row"
        >
          <td>{{ index + 1 }}</td>
          <td>{{ customer.customerId }}</td>
          <td>{{ customer.firstName }}</td>
          <td>{{ customer.lastName }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.phone }}</td>
          <td>{{ customer.address }}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customerInput: {
        customerId: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
      },
      customers: [],
      dialog: false,
      dialogs: false,
      dialogss: false,
    };
  },
  mounted() {
    //console.log('mounted')
    this.loadData();
  },
  methods: {
    addCustomer() {
      this.customers.push(this.customerInput);
      this.customerInput = {
        customerId: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
      };
    },
    exportToCSV() {
      const csvContent =
        "data:text/csv;charset=utf-8," +
        this.customers
          .map((customer) => Object.values(customer).join(","))
          .join("\n");

      const csvBlob = new Blob([csvContent], {
        type: "text/csv;charset=utf-8;",
      });
      const csvURL = URL.createObjectURL(csvBlob);

      const link = document.createElement("a");
      link.href = csvURL;
      link.download = "customer_data.csv";
      link.style.display = "none";

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      URL.revokeObjectURL(csvURL);
    },
    saveToStorage() {
      localStorage.setItem("customers", JSON.stringify(this.customers));
      this.dialogss = false;
    },
    loadData() {
      this.customers = JSON.parse(localStorage.getItem("customers"));
    },
    deleteAll(index) {
      this.customers.splice(index);
      this.dialog = false;
    },
    confirmDelete() {
      this.dialog = true;
    },
    savedDialog() {
  this.dialogss = true;
  setTimeout(() => {
    this.dialogss = false; // Set it back to false after 5 seconds (5000 milliseconds)
  }, 500);
},
  },
};
</script>

<style scoped>
.v-select {
  width: 70%;
  margin: auto;
  height: 60px;
  background-color: #ffffff;
}
.table-container {
  background-color: rgb(238, 234, 234);
  position: relative;
  width: 100;
}


.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  text-transform: uppercase;
}

tr.table-row {
  border-bottom: 1px solid #ddd;
}
tr.table-row:nth-child(even) {
  background-color: #f2f2f2;
}
.v-simple-table {
  border-collapse: collapse;
  width: 100%;
}

th {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  width: max-content;
}
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
#submitButton {
  width: 190px;
}
.total{
  margin: auto;
width: 60%;
}
span{
  margin: auto;
}

.cardTitle{
display: flex;
margin: auto;
width: 100%;
}
</style>
