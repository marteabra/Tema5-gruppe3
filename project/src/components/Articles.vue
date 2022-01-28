<template>
   <Header />
   <Announcement />

   <div v-if="article">
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
         <p v-for="(p, index) in article.body" :class="'article__paragraph' + index">
            <br /> 
            {{ p }}
         </p>
      </article>
   </div>
   
   <Footer />
</template>

<script>
import Header from '../components/Header.vue';
import Announcement from './Announcement.vue';
import Footer from '../components/Footer.vue';

export default {
   components: {
      Header,
      Announcement,
      Footer,
   },

   props: [
      'article_id',
   ],

   created() {
      this.article = this.$store.state.articles.find((article) => {
         return article.slug === this.article_id
      });
   },
};
</script>


<style>
</style>