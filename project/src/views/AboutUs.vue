<template>
  <Header />
  <Announcement />

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

  <Footer />
</template>


<script>
import Header from "../components/Header.vue";
import Announcement from "../components/Announcement.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Header,
    Announcement,
    Footer
  },

   computed: {
         title() {
            return this.$store.state.pages[0].content.title;
         },

         body() {
            return this.$store.state.pages[0].content.body;
         }
      },
};
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


    Header {
        z-index: 1;
        top: 0;
    }

    Footer {
        position: relative;
        bottom: 0;
    }
</style>