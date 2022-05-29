<template>
  <header class="header">
    <nav class="header__navbar">
      <RouterLink :to="{ name: 'home' }" class="header__logo">
        in(dex)
      </RouterLink>

      <button @click="displayMenu" aria-label="open navigation menu" class="header__menu">

        <svg
          width="44"
          height="26"
          viewBox="0 0 44 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 1H44" stroke="black" stroke-width="2" />
          <path d="M0 13H44" stroke="black" stroke-width="2" />
          <path d="M0 25H44" stroke="black" stroke-width="2" />
        </svg>
      </button>

      <ul v-if="menuVisible" class="header__open">
        <li v-for="page in navigationPages" class="header__item">
          {{ page.title }}
        </li>

        <div class="header__mobile">
          <li class="header__item-about">
            <RouterLink :to="{ name: 'aboutus' }">
              About us
            </RouterLink>
          </li>

          <li class="header__item-instagram">
            Instagram &nearr;   
          </li>

          <li class="header__item-twitter">
            Twitter &nearr;
          </li>

          <li class="header__item-mail">in@dex.info</li>
        </div>
      </ul>

      <button
        @click="displaySearch"
        aria-label="open searchbar"
        class="header__search"
      >
        <svg
          width="31"
          height="31"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="11.5"
            cy="11.5"
            r="10.5"
            stroke="black"
            stroke-width="2"
          />
          <path d="M19 19L30 30" stroke="black" stroke-width="2" />
        </svg>
      </button>

      <div v-if="searchVisible" class="header__container">
        <input
          type="text"
          placeholder="search for articles, books, etc."
          name="searchbar"
          class="header__input"
        />
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuVisible: false,
      searchVisible: false,
    };
  },

  computed: {
    navigationPages() {
      return this.$store.getters.getNavigation;
    },
  },

  methods: {
    displayMenu() {
      this.menuVisible = !this.menuVisible;
    },

    displaySearch() {
      this.searchVisible = !this.searchVisible;
    },
  },
};
</script>

<style>
@media screen and (max-width: 800px) {
  .header__mobile {
    display: none;
  }

  .header__menu {
    /* Header__menu button is overlaying header__input */
    z-index: 100;
  }

  .header__container {
    /* mobile version the searchbar is overlaying header__logo  */
    z-index: 1;
  }

  .header__search {
    /* Searchbar button is overlaying header__input */
    z-index: 100;
  }
}

.header {
  position: fixed;
  width: 100%;
  height: 10%;
}

.header__navbar {
  display: flex;
  justify-content: space-between;
}

.header__logo {
  position: absolute;
  margin: 5px 0 0 10px;
  text-decoration: none;
  color: var(--primary);
}

.header__menu {
  position: absolute;
  right: 0;
  margin: 5px 10px 0 0;
}

.header__search {
  padding-right: 16px;
}

.header__open {
  width: 100%;
  background-color: var(--secondary);
}

.header__item {
  display: flex;
  justify-content: center;
  cursor: pointer;
}

.header__item-about {
  position: absolute;
  top: 0;
  left: 65%;
}

.header__item-instagram {
  position: absolute;
  top: 60%;
  left: 65%;
}

.header__item-twitter {
  position: absolute;
  top: 85%;
  left: 65%;
}

.header__item-mail {
  position: absolute;
  top: 155%;
  left: 65%;
}

.header__search {
  position: absolute;
  right: 0;
  margin: 5px 50px 0 0;
}

.header__container {
  width: 100%;
  height: 50px;
  background-color: var(--secondary);
}

.header__input {
  position: absolute;
  top: 10px;
  right: 200px;
  width: 500px;
  border: none;
  border-bottom-style: groove;
  background-color: transparent;
}

.header__svg {
  margin-left: 12px;
}
</style>
