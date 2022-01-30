import Home       from './views/Home.vue';
import Articles   from './views/Articles.vue';
import AboutUs    from './views/AboutUs.vue'

export default [
      { name: 'article',      path: '/:article_id',   props: true,    component: Articles },
      { name: 'aboutus',      path: '/about-us',                      component: AboutUs },
      { name: 'home',         path: '/',                              component: Home},
]