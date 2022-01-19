import articles    from '../src/modules/articles.js';
import books       from '../src/modules/books.js';
import journal     from '../src/modules/journal.js';
import navigation  from '../src/modules/navigation.js';
import pages       from '../src/modules/pages.js';

export default {
   state() {
      return {
         information: {
            address: `172 Classon Avenue. Brooklyn, NY 11205. USA`
         },

         announcement: {
            message: `OUT NOW! Issue #123 “Dialogues on Recursive Colonialisms, Speculative Computation, and the Techno-social”`
         },
      }
   },

   modules: {
      articles,
      books,
      journal,
      navigation,
      pages,
   },
};