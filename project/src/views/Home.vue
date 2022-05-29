<template>
  <Announcement />
  <Subscribe />
  <div class="grid">
    <MainPageArticles />
    <Books />
    <Slideshow />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Announcement from "../components/Announcement.vue";
import MainPageArticles from "../components/MainPageArticles.vue";
import Footer from "../components/Footer.vue";
import Slideshow from "../components/Slideshow.vue";
import Books from "../components/Books.vue";
import Subscribe from "../components/Subscribe.vue";

import seoMixin from "../mixins/seoMixin.js";

export default {
  mixins: [seoMixin],

  components: {
    Header,
    Announcement,
    MainPageArticles,
    Slideshow,
    Footer,
    Books,
    Subscribe,
  },

  created() {
    this.metaTags({
        title: 'In(dex)',
		});
  }
};
</script>

<style>
.articles {
  grid-column: span 12;
}
</style>
