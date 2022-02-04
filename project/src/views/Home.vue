<template>
  <Header_v2 />
  <Announcement />
  <Subscribe />
  <div class="grid">
    <MainPageArticles />
    <Books />
    <Slideshow />
    <Footer />
  </div>
</template>

<script>
import Header_v2 from "../components/Header_v2.vue";
import Announcement from "../components/Announcement.vue";
import MainPageArticles from "../components/MainPageArticles.vue";
import Footer from "../components/Footer.vue";
import Slideshow from "../components/Slideshow.vue";
import Books from "../components/Books.vue";
import Subscribe from "../components/Subscribe.vue";

export default {
  components: {
    Header_v2,
    Announcement,
    MainPageArticles,
    Slideshow,
    Footer,
    Books,
    Subscribe,
  },
};
</script>

<style>
.articles {
  grid-column: span 12;
}

Header {
  z-index: 1;
}

Footer {
  position: relative;
  margin-top: 100px;
  bottom: 0;
}
</style>
