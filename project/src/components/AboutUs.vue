<template>
   <div class="page">
      <h1 class="page__title">
         {{ title }}
      </h1>

      <div class="page__container">
         <p v-for= "p in body" class="page__paragraph">
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
         }
      },
   }
</script>

<style>
.page {
   padding: 100px;
   margin: 0 100px 0 100px;
}

.page__title {
   font-size: var(--heading-font-size);
   text-align: center;
}

.page__container {
   padding-top: 50px;
}
</style>