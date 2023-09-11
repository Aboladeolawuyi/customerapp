
import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { createRouter, createWebHistory } from 'vue-router'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import customerList from './components/customerList.vue'
import customerDetails from './components/customerDetails.vue'
import page1 from './views/page1.vue'
import signup from './views/signup.vue'
import login from './views/login.vue'
import home from './views/customerform.vue'
import customertable from './views/customertable.vue'
import comment from './views/comment.vue'
import todo from './views/todo.vue'
import card from './views/card.vue'

// import {
//   VDataTable,
//   VDataTableServer,
//   VDataTableVirtual,
// } from "vuetify/labs/VDataTable";


// export default createVuetify({
//   components: {
//     VDataTable,
//     VDataTableServer,
//     VDataTableVirtual,
//   },
// })

const vuetify = createVuetify({
  components,
  directives,
})

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/details', component: customerDetails },
        { path: '/list', component: customerList },
        { path: '/home', component: page1 },
        { path: '/signup', component: signup },
        { path: '/login', component: login },
        { path: '/', component: home },
        { path: '/customertable', component: customertable },
        { path: '/comment', component: comment },
        { path: '/todo', component: todo },
        { path: '/card', component: card },

        
    ]
})

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')

