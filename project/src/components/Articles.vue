<template>
   <div v-if="articles">
   
      <h1>
         {{ articles.title }}
      </h1>

      <article>
         <p v-for="p in articles.body">
            <br /> 
            {{ p }}
         </p>
      </article>
   </div>
</template>

<script>
   export default {
      props: [
         'article_id',
      ],

      created() {
         this.articles = this.$store.state.articles.find((article) => {
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