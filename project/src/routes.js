import Home       from './views/Home.vue';
import Articles   from './views/Articles.vue';
import Page       from './views/Page.vue'

export default [
      { name: 'article',      path: '/:article_id',     component: Articles },
      { name: 'page',         path: '/page',                    component: Page },
      { name: 'home',         path: '/',                        component: Home},
]