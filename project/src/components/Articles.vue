<template>
   <Header />
   <Announcement />

   <div v-if="article">
      <h1>
         {{ article.title }}
      </h1>

      <figure>
         <img :src="article.preview.image" />
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
</style>