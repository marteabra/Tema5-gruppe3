<template>
   <Announcement />

   <div v-if="article" class="article">
      <h3 class="article__author">
         {{ article.author }}
      </h3>

      <h1 class="article__title">
         {{ article.title }}
      </h1>

      <figure class="article__container">
         <img :src="article.preview.image" :alt="article.preview.caption" class="article__image" />
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
</template>

<script>
import Header from '../components/Header.vue';
import Announcement from '../components/Announcement.vue';
import Footer from '../components/Footer.vue';

import seoMixin from '../mixins/seoMixin.js';

export default {
   mixins: [seoMixin],

   components: {
      Announcement,
   },

   created() {
      this.article = this.$store.state.articles.find((article) => {
         return article.slug === this.$route.params.article_id
      });

      this.metaTags({
         title: this.$route.params.article_id,
		});
   },
};
</script>


<style>
.article {
   padding: 50px 0 0 0;
}

.article__author {
   font-size: var(--body-font-size);
   margin: 0 20px 0 20px;
}

.article__title {
   font-size: var(--heading-font-size);
   line-height: var(--heading-line-height);
   margin: 0 20px 0 20px;
}

.article__image {
   width: 100vw;
   height: 100vh;
}

.article__content {
   width: 65vw;
   margin: 0 auto;
   font-size: var(--body-font-size);
   line-height: var(--body-line-height);
}

</style>