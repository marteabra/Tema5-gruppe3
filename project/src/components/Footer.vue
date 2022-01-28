<template>
  <footer class="footer">
    <div class="footer__logo">in(dex)</div>
    <div href="/" class="footer__address" v-for="address in information">
      {{ information.address }}
    </div>
    <div class="footer__item">
      <a href="/" class="footer__item-about">About us</a>

      <a href="/" class="footer__item-instagram">
        Instagram <i class="fas fa-arrow-up"></i>
      </a>

      <a href="/" class="footer__item-twitter">
        Twitter <i class="fas fa-arrow-up"></i>
      </a>

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
  margin-top: auto;
}

.footer__logo {
  grid-column: 1 / 6;
}

.footer__address {
  grid-column: 7 / 9;
}
.footer__item {
  grid-column: 10 / 12;
}

@media screen and (max-width: 968px) {
  .footer__item {
    grid-column: 6 / 12;
  }
  .footer__address {
    display: none;
  }
}


/* 
footer {
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  justify-content: space-between;
  padding: 0 80 20 10;
}

.footer__address {
  max-width: 16%;
  margin-left: 400px;
  text-decoration: none;
}

.footer__item {
  display: grid;
}

.footer__item a {
  text-decoration: none;
  color: black;
}

.footer__item-instagram {
  margin-top: 20px;
}

.footer__item-twitter {
  margin-bottom: 20px;
}

.fa-arrow-up {
  transform: rotate(50deg);
}
 */



</style>
