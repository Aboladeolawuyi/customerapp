<template>
  <v-app>
    <v-app-bar app color="secondary-darken-1" dark elevation="1">
      <!-- ... App bar content ... -->
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <router-link
        to="/"
        class="v-toolbar-title"
        style="text-decoration: none; color: white"
      >
        Customer Application
      </router-link>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-facebook</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-instagram</v-icon>
      </v-btn>
      <v-btn icon>
        <router-link to="/signup" class="v-btn v-btn--icon">
          <v-icon style="color: white">mdi-account-plus-outline</v-icon>
        </router-link>
      </v-btn>

      <v-btn icon>
        <router-link to="/login" class="v-btn v-btn--icon">
          <v-icon style="color: white">mdi-login</v-icon>
        </router-link>
      </v-btn>
    </v-app-bar>

    <!-- ... Navigation drawer content ... -->
    <v-navigation-drawer
      elevation="1"
      v-model="drawer"
      color="secondary-darken-1"
    >

      <v-list dense nav>
        <v-list-item
          v-for="item in menuItems"
          :key="item.value"
          :prepend-icon="item.icon"
          :title="item.title"
          :value="item.value"
          :to="{ path: item.route }"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
       
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      // user: {
      //   avatar: "https://example.com/avatar.jpg",
      //   name: "Sandra Adams",
      //   email: "sandra_a88@gmail.com",
      // },
      menuItems: [
      {
          icon: "mdi-newspaper-plus",
          title: "Customer Form",
          value: "Customer Form",
          route: "/",
        },
        {
          icon: "mdi-checkbox-marked-circle-auto-outline",
          title: "My Todo App",
          value: "My todo App",
          route: "/todo",
        },
        {
          icon: "mdi-card-plus",
          title: "My Card",
          value: "My Card",
          route: "/details",
        },
        {
          icon: "mdi-comment-account",
          title: "Customer Table",
          value: "Customer Table",
          route: "/customertable",
        },
        {
          icon: "mdi-comment",
          title: "Comment Section",
          value: "Comment Section",
          route: "/comment",
        },
        {
          icon: "mdi-account-multiple",
          title: "Our Team",
          value: "Cards",
          route: "/card",
        },
        {
          icon: "mdi-account",
          title: "Customer Details",
          value: "Customer Details",
          route: "/details",
        },
      ],
    };
  },
};
</script>

<style>
.add-customer-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.add-customer-btn .v-btn {
  border-radius: 50%;
}
</style>
