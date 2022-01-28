<template>
   <Header />
   <Announcement />

   <div v-if="article">
      <h3>
         {{ article.author }}
      </h3>

      <h1>
         {{ article.title }}
      </h1>

      <figure>
         <img :src="article.preview.image" :alt="article.preview.caption" />
         <figcaption>
            {{ article.preview.caption }}
         </figcaption>
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