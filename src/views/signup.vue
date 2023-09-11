<template>
  <div class="login-container">
    <h2>Welcome to Genesis Customer Application</h2>
    <h2>Create an Account</h2>
    <form @submit.prevent="signUp" class="loginpane">
      <v-text-field
        v-model="loginInput.firstName"
        type="text"
        placeholder="First Name"
      ></v-text-field>
      <v-text-field
        v-model="loginInput.lastName"
        type="text"
        placeholder="Last Name"
      ></v-text-field>
      <v-text-field
        v-model="loginInput.email"
        type="email"
        placeholder="Email"
      ></v-text-field>
      <v-text-field
        v-model="loginInput.password"
        :type="passwordFieldType"
        placeholder="Password"
      ></v-text-field>
      <small class="password-hint"
        >Password must be 8 or more characters with at least 1 uppercase, 1
        lowercase, 1 number, and 1 special character.</small
      >
      <v-btn color="#018786" type="submit">Sign Up</v-btn>
    </form>
    <div class="options">
      <p>
        Already have an account? <router-link to="/login">Log In</router-link>
      </p>
    </div>
    <!-- <div>
      <ul v-for="details in loginDetails">
  <li>{{ details.firstName }}
  {{ details.lastName }}{{ details.email }}</li>
</ul>
    </div> -->
  </div>

  <router-view></router-view>

  <v-dialog v-model="showSuccessDialog" max-width="400">
    <v-card>
      <v-card-title>Success</v-card-title>
      <v-card-text>Sign-up successful!</v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="redirectToLogin">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-dialog v-model="showErrorDialog" max-width="400">
    <v-card>
      <v-card-title>Error</v-card-title>
      <v-card-text>{{ errorMessage }}</v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="showErrorDialog = false">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
  return {
    loginInput: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    loginDetails: [], // Initialize an empty array to store user details
    errorMessage: "",
    showErrorDialog: false,
    showSuccessDialog: false,
  };
},
mounted() {
  const storedLoginDetails = localStorage.getItem("loginDetails");
  if (storedLoginDetails) {
    this.loginDetails = JSON.parse(storedLoginDetails);
  }
},
methods: {
  signUp() {
    if (
      !this.loginInput.firstName ||
      !this.loginInput.lastName ||
      !this.loginInput.email ||
      !this.loginInput.password
    ) {
      this.errorMessage = "Please provide all required information.";
      this.showErrorDialog = true;
      return;
    }
    
    const isAuthenticated = true; // Replace with your actual authentication logic

    if (isAuthenticated) {
      // Push the current user input to the loginDetails array
      this.loginDetails.push(this.loginInput);
      localStorage.setItem("loginDetails", JSON.stringify(this.loginDetails));
      
      // Reset the input fields
      this.loginInput = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      };

      this.showSuccessDialog = true;
    } else {
      this.errorMessage = "Sign-up failed. Please try again.";
      this.showErrorDialog = true;
    }
  },
  redirectToLogin() {
    this.$router.push("/login");
  },
},
};
</script>

<style scoped>
.login-container {
  margin: auto;
  margin-top: 7%;
  width: 40%;
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(163, 9, 9, 0.1);
  text-align: center;
  border: 1px solid rgb(42, 29, 29);
}
h2 {
  margin-bottom: 20px;
  color: #333;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

button {
  width: 70%;
  margin-top: 20px;
  padding: 10px;
  background-color: #018786;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
}
.v-text-field {
  width: 100%;
}
.v-card-text {
  margin: auto;
}
.options {
  margin-top: 20px;
  color: #666;
}
a {
  color: #018786;
  text-decoration: none;
}
&:hover {
  text-decoration: underline;
}

.password-hint {
  font-size: 12px;
  color: #999;
  margin-top: 5px;
}
.v-btn {
  margin: auto;
  color: white;
}
</style>
