<template>
  <footer class="footer">
    <div class="footer__logo">in(dex)</div>
    <div class="footer__address" v-for="address in information">
      {{ information.address }}
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

