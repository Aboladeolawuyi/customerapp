<template>
  <div>
    <v-container>
      <v-row>
        <v-col v-for="(developer, index) in teamDevelopers" :key="index" cols="12" sm="6" md="4" lg="3">
          <v-card class="pa-2">
            <v-img :src="developer.image" height="200" style="border-radius: 200px;"></v-img>
            <v-card-text class="text-center">
              <h3>{{ developer.name }}</h3>
              <p>{{ developer.position }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <div>
    <v-img
      src="./src/views/a.png"
      height="200px"
      max-width="400"
      cover
    ></v-img>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teamDevelopers: [
        {
          name: "Damilola Kolawole",
          position: "Lead Developer",
          image: "./src/images/damilola1.png", 
        },
        {
          name: "Developer 1",
          position: "Front-end Developer",
          image: "./src/images/abolade.jpeg", 
        },
        {
          name: "Developer 1",
          position: "Front-end Developer",
          image: "./src/images/abolade.jpeg", 
        },
        {
          name: "Developer 1",
          position: "Front-end Developer",
          image: "./src/images/abolade.jpeg", 
        },
        {
          name: "Developer 1",
          position: "Front-end Developer",
          image: "./src/images/abolade.jpeg",
        },
        
      ],
    };
  },
};
</script>

<style scoped>
/* Add your custom CSS styles here */
</style>
