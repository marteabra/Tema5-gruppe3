<template>
  <div class="articles">
    <div class="articles__new">
      Latest
    </div>

    <div v-for="article in getArticles">
      <div class="articles__title">
        {{ article.title }}
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Slideshow from "../components/Slideshow.vue";

export default {
  components: {
    Header,
    Slideshow,
    Footer,
  },

  computed: {
    getArticles() {
				return this.$store.getters.getArticle;
    },
  },
};
</script>

<style>

</style>