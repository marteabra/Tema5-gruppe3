export default {
   state() {
      return {
         slides: [
            { 
               title: 'image by April Bey', 
               caption: '“And My Flames Stay Till You Get Out My Way” Museum für Moderne Kunst April Bey',
               file: 'project/public/images/journal_1.jpeg'
            },
            {
               title: 'image by Kenny Fries', 
               caption: '“Crip Time” Vienna Art Week Kenny Fries', 
               file: 'project/public/images/journal_2.jpeg'
            },
            { 
               title: 'image by Novuyo Moyo', 
               caption: '“Losing Control” Alte Pinakothek Novuyo Moyo', 
               file: 'project/public/images/journal_3.jpeg'
            },
         ],
      }
   },

   getters: {
      getSlides(state) {
         return state.slides;
      }
   }
}