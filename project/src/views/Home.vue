<template>
  <Header />
  <Announcement />
  <MainPageArticles />
  <Books />
  <Slideshow />
  <Footer />
</template>

<script>
import Header from "../components/Header.vue";
import Announcement from "../components/Announcement.vue";
import MainPageArticles from '../components/MainPageArticles.vue';
import Slideshow from "../components/Slideshow.vue";
import Footer from "../components/Footer.vue";
import Books from '../components/Books.vue';

export default {
  components: {
    Header,
    Announcement,
    MainPageArticles,
    Slideshow,
    Footer,
    Books,
  },
};
</script>

<style>
Header {
    z-index: 1;
  }
  Footer {
    position: relative;
    margin-top: 150px;
    bottom: 0;
  }
  Slideshow {
    position: relative;
  }
</style>