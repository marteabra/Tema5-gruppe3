<template>
  <footer class="footer">
    <p class="footer__logo">
      in(dex)
    </p>

    <a href="/" class="footer__address" v-for="address in information">
      {{ information.address }}
    </a>

    <div class="footer__item">
      <RouterLink :to="{ name: 'aboutus' }" class="footer__item-about">
        About us
      </RouterLink>

      <div class="footer__social-media">
        <a href="/" class="footer__instagram"> 
          Instagram &nearr; 
        </a>

        <a href="/" class="footer__twitter"> 
          Twitter &nearr; 
        </a>
      </div>

      <a href="/" class="footer__mail">
        in@dex.info
      </a>
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

.footer__social-media {
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
