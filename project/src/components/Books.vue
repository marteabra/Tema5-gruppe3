<template>
  <h1 class="section__header">
    Books
  </h1>

  <div v-for="(book, index) in books" class="books__item">
    <figure :class="'books__figure-' + index">
      <img :src="book.cover" :alt="book.title" :class="'books__image-' + index" />
      <p>
        {{ book.writers }}
      </p>
      <p>
        {{ book.title }}
      </p>
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
