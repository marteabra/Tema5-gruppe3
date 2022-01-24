export default {
   state() {
      return {
         books: [
            {
               title: 'Radicalizing Care',
               writers: 'Birgit Bosold, Lena Fritsch, Vera Hofmann, Elke Krasny, Sophie Lingg',
               cover: 'project/public/images/book_1.png'
            },
            {
               title: 'Curating the Complex & The Open Strike',
               writers: 'TERRY SMITH',
               cover: 'project/public/images/book_2.png'
            },
            {
               title: 'Amazonia',
               writers: 'KATERYNA BOTANOVA, QUINN LATIMER',
               cover: 'project/public/images/book_3.png'
            },
            {
               title: 'Parapolitics',
               writers: 'ANSELM FRANKE, NIDA GHOUSE, PAZ GUEVARA, ANTONIA MAJACA (EDS.)',
               cover: 'project/public/images/book_4.png'
            },
            {
               title: 'Visual Cultures as Time Travel',
               writers: 'HENRIETTE GUNKEL, AYESHA HAMEED',
               cover: 'project/public/images/book_5.png'
            },
            {
               title: 'Dear Navigator',
               writers: 'HU FANG',
               cover: 'project/public/images/book_6.png'
            },
         ],
      };
   },

   getters: {
      getBooks(state) {
         return state.books;
      }
   },
};