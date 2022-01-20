<template>
   <div class="articles">
      <div class="articles__news">
         Latest
      </div>

      <div v-for="(article, index) in getArticles" :class="'articles__item-' + index" :key="index">
         <div :class="'articles__title-' + index">
            {{ article.title }}
         </div>

         <div :class="'articles__lead-' + index">
            {{ article.lead }}
         </div>

         <figure :class="'articles__figure-' + index">
            <img :src="article.preview.image" :alt="article.preview.caption" :class="'articles__image-' + index" />
         </figure>
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

   .articles__title-0 {
      display: flex;
      justify-content: center;
      font-size: var(--heading-font-size);
   }

   .articles__lead-0 {
      width: 100%;
      height: 156px;
      margin: 0 20px;
      text-align: center;
      font-size: 20px;
   }   
</style>