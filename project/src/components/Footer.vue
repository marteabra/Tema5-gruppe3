<template>
  <footer class="footer">
    <div class="footer__logo">in(dex)</div>
    <div href="/" class="footer__address" v-for="address in information">
      {{ information.address }}
    </div>
    <div class="footer__item">
      <a href="/" class="footer__item-about">About us</a>

      <div class="social-media-links">
        <a href="/" class="footer__item-instagram"> Instagram &nearr; </a>

        <a href="/" class="footer__item-twitter"> Twitter &nearr; </a>
      </div>

      <a href="/" class="footer__item-mail">in@dex.info</a>
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
.footer {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 0 12px;
  width: 100%;
  margin-bottom: 10px;
}

.footer__logo {
  grid-column: 1 / 6;
}

.footer__address {
  grid-column: 7 / 9;
}
.footer__item {
  grid-column: 10 / 12;
  padding: 0 1rem 0 1rem;
}

.social-media-links {
  margin: 15 0 15 0;
}

@media screen and (max-width: 968px) {
  .footer__item {
    grid-column: 6 / 12;
  }
  .footer__address {
    display: none;
  }
}
</style>
