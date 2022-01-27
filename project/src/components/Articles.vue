<template>
   {{ $route.params.article_id }}

   <div v-if="articles">
      <h1> {{ articles.title }} </h1>
      <p> {{ articles.body }} </p>
   </div>
</template>

<script>
   export default {
      data() {
         return {
            id: this.$route.params.article_id,
            articles: [],
            author: '',
            title: '',
            body: '',
            image: '',
         };
      }, 

      props: [
         'article_id',
      ],

      created() {
         this.articles = this.$store.state.articles.find((article) => {
            return article.slug === this.article_id
         });
      },

      mounted: function() {
         this.article_id = this.$store.state.articles.slug;
         console.log(this.id)
         this.articles = this.$store.state.articles;
         this.author = this.$store.state.articles.author;
         this.title =  this.$store.state.articles.title;
         this.body = this.$store.state.articles.body;
         console.log(this.articles);
         console.log(this.author);
         console.log(this.title);
         console.log(this.body);
      },
};

/*
      computed: {
         /*article(slug) {
            return this.$store.state.articles.find(article => article.slug === slug)
         }*/
/*
         articles() {
            return this.$store.state.articles(this.article_id);
         }
      },
*/

</script>


<style>
</style>