<template>
  <footer class="footer">
    <div class="footer__logo">in(dex)</div>
    <div class="footer__address" v-for="address in information">
      {{ information.address }}
    </div>
    <div class="footer__item">
      <li class="footer__item--about">About us</li>

      <li class="footer__item--instagram">
        Instagram <i class="fas fa-arrow-up"></i>
      </li>

      <li class="footer__item--twitter">
        Twitter <i class="fas fa-arrow-up"></i>
      </li>

      <li class="footer__item--mail">in@dex.info</li>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    information() {
      return this.$store.getters.getAddress;
    },
  },
};
</script>

<style>
</style>
