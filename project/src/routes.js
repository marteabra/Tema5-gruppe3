import Home       from './views/Home.vue';
import Articles   from './views/Articles.vue';

export default [
      { name: 'article',      path: '/article/:article_id',     component: Articles },
      { name: 'home',         path: '/',                component: Home},
]