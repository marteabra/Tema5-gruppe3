<template>
  <Header />
  <Announcement />
  <MainPageArticles />
  <Footer />
</template>

<script>
import Header from "../components/Header.vue";
import Announcement from "../components/Announcement.vue";
import MainPageArticles from "../components/MainPageArticles.vue";
import Footer from "../components/Footer.vue";
import Slideshow from "../components/Slideshow.vue";

export default {
  components: {
    Header,
    Announcement,
    MainPageArticles,
    Slideshow,
    Footer,
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
</style>