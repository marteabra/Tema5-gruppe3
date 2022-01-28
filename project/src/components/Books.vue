<template>
  <div class="section__header">Books</div>
  
    <div v-for="(book, index) in books" class="header__item">
      <figure :class="'books__figure-' + index">
        <img
          :src="book.cover"
          :alt="book.title"
          :class="'books__image-' + index"
        />
        <div>{{ book.writers }}</div>
        <div>{{ book.title }}</div>
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
/* 
.books__heading {
  text-align: center;
  margin: 10px;
}

.books__container {
  display: flex;
}

.books__image-0 {
  padding: 5px;
  grid-area: a;
}

.books__image-1 {
  padding: 5px;
  grid-area: b;
}

.books__image-2 {
  padding: 5px;
  grid-area: c;
}

.books__image-3 {
  padding: 5px;
  grid-area: d;
}

.books__image-4 {
  padding: 5px;
  grid-area: e;
}

.books__image-5 {
  padding: 5px;
  grid-area: f;
}

@media screen and (max-width: 968px) {
  .books__container {
    display: grid;
    grid-template-areas: "a b c" "d e f";
  }
}
 */
</style>