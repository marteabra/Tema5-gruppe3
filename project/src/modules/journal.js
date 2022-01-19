export default {
   state() {
      return {
         getters: {
            getSlideShow(state) {
               return state.journal;
            }
         },
      }
   }
}