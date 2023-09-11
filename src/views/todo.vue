<template>
  <v-container class="container">
    <v-row>
      <v-col cols="12">
        <h2 class="title">TODO APP</h2>
        <v-textarea
          v-model="output"
          placeholder="Enter your schedule here..."
          rows="5"
        ></v-textarea>
        <v-row class="btn">
          <v-btn @click="addTodo" color="primary">Add Todo</v-btn>
          <v-btn @click="clearAll" color="error">Clear All</v-btn>
        </v-row>
        <v-list class="wholeresult">
          <v-list-item v-for="(item, index) in input" :key="index">
            <v-list-item-content>
              <v-list-item-title class="schedule-item">
                <div class="schedule-text">{{ item.text }}</div>
                <div class="schedule-date">{{ item.date }}</div>
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn @click="removeTodo(index)" color="error">Remove</v-btn>
              <v-btn @click="editTodo(index)" color="primary">Edit</v-btn>
            </v-list-item-action>
          </v-list-item>
          <v-row v-if="editIndex !== false" class="edit-form">
            <v-text-field
              v-model="editedText"
              placeholder="Edit schedule..."
            ></v-text-field>
            <v-btn @click="saveEdit" color="primary">Save</v-btn>
          </v-row>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      input: JSON.parse(localStorage.getItem("input")) || [],
      output: "",
      editIndex: false,
      editedText: "",
    };
  },
  methods: {
    addTodo() {
      if (this.output.trim() !== "") {
        this.input.push({
          text: this.output,
          date: new Date().toLocaleString(),
        });
        this.output = "";
        this.saveToLocalStorage();
      }
    },
    removeTodo(index) {
      this.input.splice(index, 1);
      this.saveToLocalStorage();
    },
    clearAll() {
      this.input = [];
      this.saveToLocalStorage();
    },
    editTodo(index) {
      this.editIndex = index;
      this.editedText = this.input[index].text;
    },
    saveEdit() {
      if (this.editedText.trim() !== "") {
        this.input[this.editIndex].text = this.editedText;
        this.editIndex = false;
        this.editedText = "";
        this.saveToLocalStorage();
      }
    },
    saveToLocalStorage() {
      localStorage.setItem("input", JSON.stringify(this.input));
    },
  },
};
</script>


<style scoped>
button:hover {
  background-color: #0056b3;
}

.btn {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.container {
  margin: auto;
  padding: 20px;
  width: 400px;
  border: 2px solid #ccc;
  background-color: #f5f5f5;
  border-radius: 5px;
}

button {
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:active {
  opacity: 0.8;
}

textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  resize: vertical;
}
.schedule-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
}

.schedule-text {
  flex-grow: 1;
  margin-right: 10px;
}

.schedule-date {
  color: #888;
  font-size: 12px;
}

.edit-form {
  position: absolute;
}
.wholeresult {
  margin-top: 20px;
}
</style>
