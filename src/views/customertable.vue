<template>
  <div class="wholetable">
    <input
      type="file"
      ref="fileInput"
      @change="handleFileUpload"
      accept=".csv"
    />
    <v-simple-table>
      <thead>
        <tr>
          <th>Customer ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(customer, index) in customers" :key="index" class="table-row">
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

      customers: [
        {
          customerId: "",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
        },
      ],

  }
},
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const csvContent = e.target.result;
          const rows = csvContent.split("\n");
          const customers = [];

          for (const row of rows) {
            const data = row.split(",");
            const [customerId, firstName, lastName, email, phone, address] =
              data;
            customers.push({
              customerId,
              firstName,
              lastName,
              email,
              phone,
              address,
            });
          }

          this.customers = customers;
        };

        reader.readAsText(file);
      }
    },
  }
  };
</script>

<style scoped>
.wholetable{
color: rgb(149, 9, 9);
}
.table-card {
  width: 70%;
  min-width: 1000px;
  max-width: 1300px;
  margin-top: 20px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
}
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
</style>
