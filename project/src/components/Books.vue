<template>

   <div v-for="(book, index) in books" class="header__item">

      <figure :class="'articles__figure-' + index">
         <img :src="book.cover" :alt="book.title" :class="'articles__image-' + index" />
      </figure>
   </div>
</template>

<script>
export default {
   computed: {
         books() {
					return this.$store.getters.getBooks;
				}
      },
}
</script>

<style>
</style>