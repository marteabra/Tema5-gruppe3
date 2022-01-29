<template>
  <Header />
  <Announcement />
  <AboutUs />
  <Footer />
</template>


<script>
import Header from "../components/Header.vue";
import Announcement from "../components/Announcement.vue";
import AboutUs from "../components/AboutUs.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Header,
    Announcement,
    AboutUs,
    Footer
  },
};
</script>


<style>
    Header {
        z-index: 1;
        top: 0;
    }

    Footer {
        position: relative;
        bottom: 0;
    }
</style>