<template>
  <Header_v2 />
  <Announcement />

  <div v-if="article" class="article">
    <h3 class="article__author">
      {{ article.author }}
    </h3>

    <h1 class="article__title">
      {{ article.title }}
    </h1>

    <figure class="article__container">
      <img
        :src="article.preview.image"
        :alt="article.preview.caption"
        class="article__image"
      />
      <figcaption class="article__details">
        {{ article.preview.caption }}
      </figcaption>
    </figure>

    <article class="article__content">
      <p v-for="p in article.body">
        <br />
        {{ p }}
      </p>
    </article>
  </div>

  <Footer />
</template>

<script>
import Header_v2 from "../components/Header_v2.vue";
import Announcement from "../components/Announcement.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Header_v2,
    Announcement,
    Footer,
  },

  props: ["article_id"],

  created() {
    this.article = this.$store.state.articles.find((article) => {
      return article.slug === this.article_id;
    });
  },
};
</script>

<style>
.article {
  padding: 65px 0 0 0;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 0 12px;
}

.article__author {
  font-size: var(--body-font-size);
}

.article__title,
.article__author {
  grid-column: 2 / 13;
}

.article__container {
  grid-column: span 12;
}

.article__title {
  font-size: var(--heading-font-size);
  line-height: var(--heading-line-height);
  padding-bottom: 40px;
}

.article__image {
  width: 100vw;
  height: 100vh;
}

.article__content {
  grid-column: 3 / 11;
  font-size: var(--body-font-size);
  line-height: var(--body-line-height);
}

@media screen and (max-width: 968px) {
  .article__author,
  .article__title,
  .article__content {
    grid-column: span 12;
    padding: 0 20px 0 20px;
  }
}
</style>
