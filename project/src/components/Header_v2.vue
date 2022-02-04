<template>
  <header class="header">
    <!-- home/logo -->
    <nav class="header__logo" :class="{ hide: searchVisible == true }">
      <RouterLink :to="{ name: 'home' }"> in(dex) </RouterLink>
    </nav>

    <div v-if="searchVisible" class="header__searchbar">
      <input
        type="text"
        placeholder="search for articles, books, etc."
        name="searchbar"
        class="header__input"
      />
    </div>

    <div class="header__icons">
      <!-- search -->
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
      <!-- menu -->
      <button
        @click="displayMenu"
        aria-label="open navigation menu"
        class="header__menu"
      >
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
    </div>

    <ul v-if="menuVisible" class="header__open">
      <li v-for="page in navigationPages" class="header__item">
        {{ page.title }}
      </li>

      <li class="header__item--right--row1">
        <RouterLink :to="{ name: 'aboutus' }"> About us </RouterLink>
      </li>
      <li class="header__item--right--row3">Instagram &nearr;</li>
      <li class="header__item--right--row4">Twitter &nearr;</li>
      <li class="header__item--right--row6">in@dex.info</li>
    </ul>
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
.header {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 0 12px;
  position: fixed;
  width: 100vw;
  padding: 0 23px;
}

.header__logo {
  grid-column: 1 / 3;
  margin-top: 11px;
  font-size: 30px;
  z-index: 1;
}

.header__icons {
  grid-column: 11 / 13;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
}

.header__menu {
  margin-left: 20px;
}

.header__searchbar {
  background: var(--secondary);
  grid-column: span 12;
  text-align: center;
  height: 64px;
  position: absolute;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header__input {
  width: 500px;
  border: none;
  border-bottom-style: groove;
  background-color: transparent;
}

.header__open {
  grid-column: span 12;
  grid-template-columns: repeat(12, 1fr);
  display: grid;
  grid-gap: 0 12px;
  position: absolute;
  width: 100%;
  padding: 11px 23px 16px 23px;
  background: var(--secondary);
  font-size: 30px;
}

.header__item {
  grid-column: 6 / 9;
}

.header__item--right--row1 {
  grid-column: 9 / 12;
  grid-row: 1;
}

.header__item--right--row3 {
  grid-column: 9 / 12;
  grid-row: 3;
}

.header__item--right--row4 {
  grid-column: 9 / 12;
  grid-row: 4;
}

.header__item--right--row6 {
  grid-column: 9 / 12;
  grid-row: 6;
}

@media screen and (max-width: 968px) {
  .header__item--right--row1,
  .header__item--right--row3,
  .header__item--right--row4,
  .header__item--right--row6 {
    display: none;
  }

  .header__item {
    grid-column: span 12;
    text-align: center;
  }

  .header__searchbar {
    grid-column: span 12;
    justify-content: left;
    padding-left: 62px;
  }
  .hide {
    display: none;
  }
  .header {
    height: 64px;
  }
}
</style>
