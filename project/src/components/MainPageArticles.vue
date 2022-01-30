<template>
  <div class="section__header--padding">Latest</div>
  <div class="articles">
    <div
      v-for="(article, index) in articles"
      :key="index"
      class="articles__wrapper"
    >
      <div class="articles__wrapper__text">
        <RouterLink
          :to="{ name: 'article', params: { article_id: article.slug } }"
        >
          <h2>{{ article.title }}</h2>
          <span>{{ article.lead }}</span>
        </RouterLink>
      </div>

      <img
        class="articles__img"
        :src="article.preview.image"
        :alt="article.preview.caption"
      />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    articles() {
      return this.$store.state.articles;
    },
  },
};
</script>

<style>
.articles {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 0 12px;
  text-align: center;
}

/* DESKTOP */
@media screen and (min-width: 968px) {
  /* MAIN ARTICLE (1) */

  .articles > div:first-child {
    grid-column: 3 / 11;

    /* SUBGRID MAIN ARTICLE */
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0 12px;
  }

  /* MAIN ARTICLE TEXT WRAPPER */
  .articles :first-child > div {
    grid-column: 2 / 8;
  }

  /* MAIN ARTICLE IMG */
  .articles :first-child > img {
    grid-column: 1 / 9;
  }

  /* LEFT SIDE SMALLER ARTICLES (2,4,6...) */
  .articles > div:nth-child(even) {
    grid-column: 1 / 7;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 0 12px;
  }

  /* RIGHT SIDE SMALLER ARTICLES (3,5,7...) */
  .articles > div:nth-child(2n + 3) {
    grid-column: 7 / 13;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 0 12px;
  }

  /* TEXT WRAPPER SMALL ARTICLES (ODD + EVEN) */
  .articles > div:nth-child(even) > div,
  .articles > div:nth-child(2n + 3) > div {

    grid-column: 1 / 9;
    padding: 0 45 0 45;
  }

  /* img SMALL ARTICLES (ODD + EVEN) */
  .articles > div:nth-child(even) > img,
  .articles > div:nth-child(2n + 3) > img {
    grid-column: 1 / 7;
  }
}

/* MOBILE */
@media screen and (max-width: 968px) {
  .articles__wrapper {
    grid-column: span 12;
  }
}

.articles__wrapper > img {
  padding-top: 40px;
  padding-bottom: 100px;
}
</style>
