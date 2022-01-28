export default {
   state() {
      return {
         books: [
            {
               title: 'Radicalizing Care',
               writers: 'Birgit Bosold, Lena Fritsch, Vera Hofmann, Elke Krasny, Sophie Lingg',
               cover: './images/book_1.png'
            },
            {
               title: 'Curating the Complex & The Open Strike',
               writers: 'TERRY SMITH',
               cover: './images/book_2.png'
            },
            {
               title: 'Amazonia',
               writers: 'KATERYNA BOTANOVA, QUINN LATIMER',
               cover: './images/book_3.png'
            },
            {
               title: 'Parapolitics',
               writers: 'ANSELM FRANKE, NIDA GHOUSE, PAZ GUEVARA, ANTONIA MAJACA (EDS.)',
               cover: './images/book_4.png'
            },
            {
               title: 'Visual Cultures as Time Travel',
               writers: 'HENRIETTE GUNKEL, AYESHA HAMEED',
               cover: './images/book_5.png'
            },
            {
               title: 'Dear Navigator',
               writers: 'HU FANG',
               cover: './images/book_6.jpg'
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