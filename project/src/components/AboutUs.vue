<template>
   <h1 class="page__title">
      {{ title }}
   </h1>

   <div class="page__container">
      <p v-for="(p, index) in body" :class="'page__' + index">
         {{ p }}
      </p>
   </div>
</template>

<script>
   export default {
      computed: {
         pages() {
            return this.$store.state.pages;
         },

         title() {
            return this.$store.state.pages[0].content.title;
         },

         body() {
            return this.$store.state.pages[0].content.body;
         }
      },
   }
</script>
<style>

</style>