import { createApp } from 'vue';
import { createStore } from 'vuex';
import { createRouter, createWebHistory } from 'vue - router';
import App from './App.vue';
import routes from './routes.js.js.js';
import store from './store.js.js.js';
const app_store = createStore(store);
const router = createRouter({
    routes: routes,
    history: createWebHistory()
})
createApp(App)
    .use(app_store)
    .use(router)
    .mount('#app');









