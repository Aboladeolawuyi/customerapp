<template>
  <div class="app">
    <h1>User Comment</h1>
    <div class="news-form">
      <input type="file" @change="handleImageUpload" />
      <v-text-field class="newstitle" v-model="newsTitle" placeholder="Comment Title"></v-text-field>
      <v-textarea v-model="newsBody" placeholder="News Body" cols="25" rows="10"></v-textarea>
      <v-btn color="secondary-darken-1" @click="publishNews"><v-icon>mdi-publish</v-icon>Publish</v-btn>
    </div>
    <div v-for="(news, index) in publishedNews" :key="index" class="news-article">
      <img :src="news.image" alt="News Image" style="max-width: 300px;">
      <h2>{{ news.title }}</h2>
      <p>{{ news.body }}</p>
      <p>Published at: {{ news.timestamp }}</p>
      <div class="comment-section">
        <textarea v-model="news.newComment" placeholder="Add a comment"></textarea>
        <button @click="addComment(news)">Add Comment</button>
        <div v-for="(comment, commentIndex) in news.comments" :key="commentIndex" class="comment">
          {{ comment }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      newsTitle: "",
      newsBody: "",
      newsImage: "",
      publishedNews: []
    };
  },
  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.newsImage = URL.createObjectURL(file);
      }
    },
    publishNews() {
      if (this.newsTitle && this.newsBody) {
        const timestamp = new Date().toLocaleString();
        const newNews = {
          title: this.newsTitle,
          body: this.newsBody,
          image: this.newsImage,
          timestamp: timestamp,
          comments: []
        };
        this.publishedNews.unshift(newNews);
        this.newsTitle = "";
        this.newsBody = "";
        this.newsImage = "";
      }
    },
    addComment(news) {
      if (news.newComment) {
        news.comments.push(news.newComment);
        news.newComment = "";
      }
    }
  }
};
</script>

<style scoped>
.app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.news-form {
  margin-bottom: 20px;
}

.news-article {
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
}

.news-article img {
  max-width: 30%;
}

.v-textarea {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  font-family: helvetica;
}
</style>
