export default {
   state() {
      return {
         pages: [
            {
               name: 'About us',
               slug: 'about-us',
               content: {
                  title: 'in(dex) is the largest repository of writing in the arts',
                  body: [
                     `The in(dex) archive was started by artists in 1999. Online, index.info spans numerous strains of critical discourse in art, architecture, film, and theory, and connects many of the most significant art institutions with audiences around the world.`,
                     `All in(dex)’s announcements deliver the latest press releases of key art exhibitions relevant to an international public. Its online archive reaches back two decades, forming a unique art historical resource on global contemporary art exhibitions, curatorial concepts, and artistic ideas.`,
                     `in(dex) produces and presents original art projects, symposia, and exhibitions that have appeared at Documenta, the Venice Biennale, and art institutions around the world, as well as at its own space in New York, which hosts frequent public lectures and a regular podcast series.`,
                     `The in(dex) journal, launched in 2008, commissions and publishes some of the most influential writings on art, film, history, technology, and politics in its monthly online publication and series of books, published together with Sternberg Press and the University of Minnesota Press. Many essays first published in e-flux journal have become canonical readings in the art theory of our time. In 2016, e-flux launched a new publication on architecture, and in 2019, e-flux Video & Film began streaming artist films online.`
                  ],
               },
            },
         ],
      };  
   },

   getters: {
      pages(state) {
         return state.pages;
      }
   }
};