<template>
    <v-app>
      <!-- App Bar (Always Visible) -->
      <v-app-bar app color="primary" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="white--text">Customer Application</v-toolbar-title>
      </v-app-bar>
  
      <!-- Main Layout (Navigation Drawer and Content) -->
      <v-row>
        <!-- Navigation Drawer (Always Visible) -->
        <v-navigation-drawer app expand-on-hover rail :permanent="true">
            <v-content>
                <customerform/>
            </v-content>
          <v-list>
            <v-list-item>
              <v-btn text><router-link to="/customertable">Customer Table</router-link></v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn text><router-link to="/customerform">Customer Form</router-link></v-btn>
            </v-list-item>
            <!-- You can add more navigation items here -->
          </v-list>
        </v-navigation-drawer>
  
        <!-- Content Area (Changes with Router View) -->
        <v-col cols="12" sm="8" md="6">
          <v-card elevation="3">
            <v-card-title class="headline text-center">Choose a Section</v-card-title>
            <v-card-text class="text-center">
              <v-btn text><router-link to="/list">Lists</router-link></v-btn>
              <v-btn text><router-link to="/details">Details</router-link></v-btn>
            </v-card-text>
          </v-card>
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-app>
  </template>
  
  <script>
  export default {
    data() {
      return {
        drawer: true,
      };
    },
  };
  </script>
  
  <style>
  .v-list-item {
    padding-left: 24px;
  }
  </style>
  