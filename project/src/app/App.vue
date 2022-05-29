<template>
   <Header />
   <RouterView />
   <Footer />
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
   components: {
      Header,
      Footer
   }
}
</script>

<style>
   @import '../style/reset.css';
   @import '../style/font.css';
   @import '../style/variables.css';
   @import '../style/style.css';


Header {
   z-index: 1;
}

Footer {
   position: relative;
   margin-top: 100px;
   bottom: 0;
}
</style>