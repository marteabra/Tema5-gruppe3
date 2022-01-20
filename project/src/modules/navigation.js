export default {
   state() {
      return {
         navigation: [
            { title: `Announcements` },
            { title: `Journal` },
            { title: `Architecture` },
            { title: `Video & Film` },
            { title: `Live` },
            { title: `Notes` },
            { title: `Books` },
            { title: `Projects` },
            { title: `Podcasts` },
         ],
      };
   },

   getters: {
      getNavigation(state) {
         return state.navigation;
      }
   }
};