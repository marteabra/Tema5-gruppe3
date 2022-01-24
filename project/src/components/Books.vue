<template>
  <div class="books__heading">Books</div>
  <div class="books__container">
    <div v-for="(book, index) in books" class="header__item">
      <figure :class="'articles__figure-' + index">
        <img
          :src="book.cover"
          :alt="book.title"
          :class="'articles__image-' + index"
        />
        <div>{{ book.writers }}</div>
        <div>{{ book.title }}</div>
      </figure>
    </div>
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
.books__container {
  display: flex;
}

.books__heading {
  text-align: center;
  margin: 10px;
}

.articles__image-0 {
  margin-top: 0;
  margin-bottom: 0;
  padding: 5px;
  grid-area: a;
}

.articles__image-1 {
  margin-top: 0;
  padding: 5px;
  grid-area: b;
}

.articles__image-2 {
  margin-top: 0;
  padding: 5px;
  grid-area: c;
}

.articles__image-3 {
  padding: 5px;
  grid-area: d;
}

.articles__image-4 {
  padding: 5px;
  grid-area: e;
}

.articles__image-5 {
  padding: 5px;
  grid-area: f;
}

@media screen and (max-width: 968px) {
  .books__container {
    display: grid;
    grid-template-areas: "a b c" "d e f";
  }
}
</style>