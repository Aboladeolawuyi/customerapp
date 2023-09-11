<template>
  <div class="login-container">
    <h2>Welcome to Genesis Customer Application</h2>
    <h2>Please Log in</h2>
    <form @submit.prevent="login" class="loginpane">
      <v-text-field
        width="80%"
        placeholder="Email"
        type="email"
        v-model="email"
      ></v-text-field>
      <v-text-field
        width="80%"
        placeholder="Password"
        type="password"
        v-model="password"
      ></v-text-field>
      <button type="submit" class="login-button">Login</button>
    </form>

    <div class="options">
      <a href="#">Forgot Password?</a> <br />
      <p>
        Not registered? <router-link to="/signup">Sign Up Here</router-link>
      </p>
    </div>
  </div>

  <v-dialog v-model="showDialog" max-width="400">
    <v-card>
      <v-card-title>Error</v-card-title>
      <v-card-text>
        <p v-if="error">Incorrect email or password.</p>
        <p v-else>Incorrect email or password</p>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="showDialog = false">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      showDialog: false,
    };
  },
  computed: {
    error() {
      return !this.email || !this.password; // Check if both email and password are empty
    },
  },
 
  methods: {
    login() {
      if (this.error) {
        this.showDialog = true;
      } else {

        const signupDetails = JSON.parse(localStorage.getItem("loginDetails"));
        
        if (signupDetails) {

          const match = signupDetails.find(
            function (user) {
              return (
                user.email === this.email && user.password === this.password
              );
            }.bind(this)
          );

          if (match) {
            this.$router.push("/#");
          } else {
           
            this.showDialog = true;
          }
        } else {
          this.showDialog = true;
        }
      }
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
  justify-content: center;
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
  margin: auto;
  padding: 25px;

  background-color: #018786;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  justify-content: center;
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
.login-button {
  margin: auto;
  padding: 15px 40px;
  background-color: #018786;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}
.v-text-field {
  width: 80%;
}
</style>
