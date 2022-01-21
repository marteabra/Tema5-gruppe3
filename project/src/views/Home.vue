<template>
  <Header />
  <MainPageArticles />
  <Footer />
</template>

<script>
import Header from "../components/Header.vue";
import MainPageArticles from '../components/MainPageArticles.vue';
import Footer from "../components/Footer.vue";
import Slideshow from "../components/Slideshow.vue";

export default {
  components: {
    Header,
    MainPageArticles,
    Slideshow,
    Footer,
  },
};
</script>

<style>

</style>