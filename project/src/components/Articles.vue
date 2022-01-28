<template>
  <Header />
  <Announcement />

  <div
    v-show="article_id === 'the-institute-of-the-cosmos'"
    class="section__header--left"
  >
    Krysztof Gutfranski
  </div>

  <div
    v-show="
      article_id ===
      'mutual-aid-social-distancing-and-dual-power-in-the-state-of-emergency'
    "
    class="section__header--left"
  >
    Daniel Birnbaum
  </div>

  <div class="article__wrapper" v-if="article">
    <h2
      class="article__title"
      v-bind:class="{
        'article__title--padding--extra': article_id === 'jimmie-durham',
      }"
    >
      {{ article.title }}
    </h2>

    <figure>
      <img :src="article.preview.image" />
      <figcaption>{{ article.preview.caption }}</figcaption>
    </figure>

    <article>
      <p v-for="p in article.body">
        <br />
        {{ p }}
      </p>
    </article>
  </div>

  <Footer />
</template>

<script>
import Header from "../components/Header.vue";
import Announcement from "./Announcement.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Header,
    Announcement,
    Footer,
  },

  props: ["article_id"],

  created() {
    this.article = this.$store.state.articles.find((article) => {
      return article.slug === this.article_id;
    });
  },

  /*
      mounted: function() {
         this.articles = this.$store.state.articles;
         this.author = this.$store.state.articles.author;
         this.title =  this.$store.state.articles.title;
         this.body = this.$store.state.articles.body;
         this.image = this.$store.state.articles.preview.image;
      },
*/
};
</script>

<style>
.article__title,
.section__header--left {
  width: 82vw;
  margin: 0 auto;
}

.section__header--left {
  padding-top: 60px;
  font-size: 30px;
}
.article__title--padding--extra {
  padding-top: 60px;
}
figcaption {
  font-size: 20px;
  padding-bottom: 60px;
}

p {
  width: 65vw;
  margin: 0 auto;
  font-size: 30px;
}

@media screen and (max-width: 968px) {
  p,
  .article__title,
  .section__header--left {
    width: 100vw;
    padding: 0 20px;
  }
  .section__header--left,
  .article__title--padding--extra {
    padding-top: 60px;
  }
}
</style>
