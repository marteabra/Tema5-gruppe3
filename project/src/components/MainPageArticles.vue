<template>
  <div class="articles">
    <div class="articles__news">
      Latest
    </div>

    <div class="articles__container">
      <div v-for="(article, index) in getArticles" :class="'articles__item-' + index" :key="index">

        <RouterLink :to="{ name: 'article', params: { article_id: article.slug }}" class="articles__link">
          <div :class="'articles__title-' + index">
            {{ article.title }}
          </div>
        </RouterLink>

        <div :class="'articles__lead-' + index">
          {{ article.lead }}
        </div>

        <figure :class="'articles__figure-' + index">
          <img :src="article.preview.image" :alt="article.preview.caption" :class="'articles__image-' + index" />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getArticles() {
      return this.$store.getters.getArticle;
    },
  },
};
</script>

<style>
.articles {
  position: relative;
  width: 100%;
  min-height: 100%;
  top: 100px;
}

.articles__news {
  display: flex;
  justify-content: center;
}

.articles__container {
  display: grid;
  grid-template-areas:
    "a a a a"
    "b b c c";

  margin-top: 40px;
}

.articles__item-0 {
  grid-area: a;
}

.articles__title-0 {
  display: flex;
  justify-content: center;
  font-size: var(--heading-font-size);
}

.articles__lead-0 {
  width: 100%;
  height: 156px;
  text-align: center;
  font-size: 20px;
  padding: 0 250 0 250;
}

.articles__figure-0 {
  display: flex;
  justify-content: center;
}

.articles__image-0 {
  max-width: 70vw;
  margin: 40 0 40 0;
}

.articles__item-1 {
  grid-area: b;
  padding: 20 6 0 20;
  text-align: center;
  width: 50vw;
}

.articles__image-1 {
  margin-top: 25px;
}

.articles__title-1 {
  font-size: var(--heading-font-size);
  line-height: var(--heading-line-height);
}

.articles__lead-1 {
  padding: 0 55 0 55;
}

.articles__item-2 {
  grid-area: c;
  padding: 20 20 0 6;
  text-align: center;
  width: 50vw;
}

.articles__image-2 {
  margin-top: 25px;
}

.articles__title-2 {
  font-size: var(--heading-font-size);
  line-height: var(--heading-line-height);
}

.articles__lead-2 {
  padding: 0 50 0 50;
}

.articles__link {
  text-decoration: none;
  color: var(--primary);
}
</style>