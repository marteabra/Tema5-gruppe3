<template>
  <div class="articles">
    <div class="articles__news">Latest</div>

    <div class="articles__container">
      <div
        v-for="(article, index) in getArticles"
        :class="'articles__item-' + index"
        :key="index"
      >
        <RouterLink
          :to="{ name: 'article', params: { article_id: article.slug } }"
          class="articles__link"
        >
          <div :class="'articles__title-' + index">
            {{ article.title }}
          </div>
        </RouterLink>

        <div :class="'articles__lead-' + index">
          {{ article.lead }}
        </div>

        <figure :class="'articles__figure-' + index">
          <img
            :src="article.preview.image"
            :alt="article.preview.caption"
            :class="'articles__image-' + index"
          />
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
  margin-bottom: 100px;
}

.articles__item-0 {
  grid-area: a;
}

.articles__title-0 {
  display: flex;
  justify-content: center;
  font-size: var(--heading-font-size);
  line-height: var(--heading-line-height);
}

.articles__lead-0 {
  text-align: center;
  max-width: 809px;
  margin: 0 auto;
  font-size: var(--caption-font-size);
  line-height: var(--caption-line-height);
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
  font-size: var(--caption-font-size);
  line-height: var(--caption-line-height);
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
  font-size: var(--caption-font-size);
  line-height: var(--caption-line-height);
}

.articles__link {
  text-decoration: none;
  color: var(--primary);
}

@media screen and (max-width: 968px) {
  .articles__container {
    display: grid;
    grid-template-areas:
      "a"
      "b"
      "c";

    margin-top: 40px;
  }

  .articles__item-0 {
    width: 100vw;
  }

  .articles__title-0 {
    text-align: center;
  }

  .articles__lead-0 {
    max-width: 928px;
    padding: 0;
  }

  .articles__image-0 {
    max-width: 100vw;
    margin: 20 0 20 0;
  }

  .articles__item-1 {
    width: 100vw;
    padding: 0;
    margin-top: 30px;
  }

  .articles__lead-1 {
    max-width: 932px;
    padding: 0;
    margin: 0;
  }

  .articles__image-1 {
    max-width: 100vw;
    margin: 20 0 20 0;
  }

  .articles__item-2 {
    width: 100vw;
    padding: 0;
    margin-top: 30px;
  }

  .articles__lead-2 {
    max-width: 928px;
    padding: 0;
  }

  .articles__image-2 {
    max-width: 100vw;
    margin: 20 0 20 0;
  }
}
</style>