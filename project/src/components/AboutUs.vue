<template>
  <div class="page">
    <h1 class="page__title">
      {{ title }}
    </h1>

    <div class="page__container">
      <p v-for="p in body" class="page__paragraph">
        <br />
        {{ p }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    title() {
      return this.$store.state.pages[0].content.title;
    },

    body() {
      return this.$store.state.pages[0].content.body;
    },
  },
};
</script>

<style>
.page {
  /* padding top 40px + 25px overlap annoucement */
  padding-top: 65px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 0 12px;
}

.page__title {
  font-size: var(--heading-font-size);
  text-align: center;
  grid-column: 3 / 11;
}

.page__container {
  padding-top: 100px;
  grid-column: 3 / 11;
}
@media screen and (max-width: 968px) {
  .page__container {
    grid-column: span 12;
    padding: 0 20px 0 20px;
    padding-top: 60px;
  }
}
</style>
