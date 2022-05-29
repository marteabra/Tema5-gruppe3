<template>
  <div class="section__header">
    Books
  </div>

  <div v-for="(book, index) in books" class="books__item">
    <figure :class="'books__figure-' + index">
      <img :src="book.cover" :alt="book.title" :class="'books__image-' + index" />
      <div>
        {{ book.writers }}
      </div>
      <div>
        {{ book.title }}
      </div>
    </figure>
  </div>
</template>

<script>
export default {
  computed: {
    books() {
      return this.$store.getters.getBooks;
    },
  },
};
</script>

<style>
</style>
