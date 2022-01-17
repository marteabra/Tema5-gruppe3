<template>
   <header class="header">
      <nav class="header__navbar">
         <RouterLink :to="{ name: 'home' }" class="header__logo">
            in(dex)
         </RouterLink>

         <button @click="displayMenu" aria-label="open navigation menu" class="header__menu" >
            <i class="fas fa-bars"></i>
         </button>

         <ul v-if="this.menuVisible" class="header__open">
            <li v-for="page in navigationPages" class="header__item">
               {{ page.title }}
            </li>

            <div class="header__mobile">
               <li class="header__item--about">
                  About us
               </li>

               <li class="header__item--instagram">
                  Instagram
                  <i class="fas fa-arrow-up"></i>
               </li>

               <li class="header__item--twitter">
                  Twitter
                  <i class="fas fa-arrow-up"></i>
               </li>

               <li class="header__item--mail">
                  in@dex.info
               </li>
            </div>
         </ul>
         
         <button @click="displaySearch" aria-label="open searchbar" class="header__search">
            <i class="fas fa-search"></i>
         </button>

         <div v-if="this.searchVisible" class="header__container">
            <input type="text" placeholder="search for articles, books, etc." name="searchbar" class="header__input" /> 
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
         }
      },

      computed: {
         navigationPages() {
					return this.$store.getters.getNavigation;
				}
      },

      methods: {
         displayMenu() {
            this.menuVisible = !this.menuVisible;
         },
         
         displaySearch() {
            this.searchVisible = !this.searchVisible;
         }
      },
   }
</script>

<style>
   @media screen and (max-width: 800px) {
      .header__mobile {
         display: none;
      }
   }

   .header {
      position: fixed;
      width: 100%;
      height: 10%;
      z-index: 100;
   }

   .header__navbar {
      display: flex;
      justify-content: space-between;
   }

   .header__logo {
      position: absolute;
      margin: 5px 0 0 10px;
      text-decoration: none;
      color: black;
   }

   .header__menu {
      position: absolute;
      right: 0;
      margin: 5px 10px 0 0;
   }

   .header__open {
      width: 100%;
      height: 220px;
      background-color: rgba(235, 228, 228, 0.911);
   }

   .header__item {
      display: flex;
      justify-content: center;
   }

   .header__item--about {
      position: absolute;
      top: 0;
      left: 65%;
   }

   .header__item--instagram {
      position: absolute;
      top: 60%;
      left: 65%;
   }

   .header__item--twitter {
      position: absolute;
      top: 85%;
      left: 65%;
   }

   .header__item--mail {
      position: absolute;
      top: 155%;
      left: 65%;
   }

   .header__search {
      position: absolute;
      right: 0;
      margin: 5px 50px 0 0;
   }

   .fa-search {
      cursor: pointer;
      color: gray;
      font-size: 30px;
   }

   .fa-bars {
      cursor: pointer;
      color: gray;
      font-size: 30px;
   }

</style>