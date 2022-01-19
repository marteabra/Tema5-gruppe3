<template>
   <main>
      <h2>
         Latest
      </h2>

      <div v-for="article in articlesPages" class="header__item">
         {{ article.title }}
      </div>
   </main>
</template>

<script>
export default {
   computed: {
         articlesPages() {
					return this.$store.getters.getArticles;
				}
      },
}
</script>


<style>

</style>