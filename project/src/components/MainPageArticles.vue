<template>
   <div class="articles">
      <div class="articles__new">
         Latest
      </div>

      <div v-for="article in getArticles" :key="article.title" class="articles__container">
         <div class="articles__title">
            {{ article.title }}
         </div>

         <div class="articles__lead">
            {{ article.lead }}
         </div>

         <div class="articles__image">
            {{ article.preview.image }}
         </div>
      </div>
   </div>
</template>

<script>
   export default {
      computed: {
         getArticles() {
            return this.$store.getters.getArticles;
         },
      },
   };
</script>

<style>
</style>