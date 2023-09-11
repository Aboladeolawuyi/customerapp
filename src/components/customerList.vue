<template>
    <div>
      <h2>Customer List</h2>
      <v-list>
        <v-list-item
          v-for="customer in customers"
          :key="customer.id"
          @click="selectCustomer(customer)"
        >
          <v-list-item-title>{{ customer.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        customers: [
          { id: 1, name: 'Customer 1' },
          { id: 2, name: 'Customer 2' },
          // Add more customers here
        ]
      };
    },
    methods: {
      selectCustomer(customer) {
        this.$router.push({ name: 'customer-details', params: { id: customer.id } });
      }
    }
  };
  </script>
  