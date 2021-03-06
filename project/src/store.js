// import articles    from './modules/articles.js'
import books from './modules/books.js'
import journal from './modules/journal.js'
import navigation from './modules/navigation.js'
// import pages       from './modules/pages.js'

export default {
   state() {
      return {
         /******** THIS CONTENT NEED TO BE HERE TO BE SHOWN IN aboutUs COMPONENT **********/
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

         /******** THIS CONTENT NEED TO BE HERE TO BE SHOWN IN Article COMPONENT (under construction) **********/
         articles: [
            {
               author: 'Krzysztof Gutfranski',
               title: 'The Institute of the Cosmos',
               slug: 'the-institute-of-the-cosmos',
               lead: 'The Institute of the Cosmos is an ongoing collective research project founded in 2019. Informed by the historical ideas of Russian Cosmism, the Institute is a space for a creative investigation of the materiality of the cosmos and its strange universalism, from the perspectives of philosophy, anthropology, history of science, and art.',
               body: [
                  `The Polish magazine Obieg (Circuit) was launched in 1987, beginning as a bulletin; its name was a reference to a “third circuit” of publications that the magazine itself attempted to forge: autonomous from the dictates of the state, yet also distinct from the publications produced by the “official” political opposition, including the Solidarity movement and associated groups. The publication soon became one of the only periodicals in Polish to offer space for alternative communities and ideas; quickly, it grew into a trusted information guide and platform for exchanging what would become crucial historical perspectives and concepts. As Poland underwent seismic political changes, so did the magazine. In the 1990s, it was no longer a bulletin, but rather transformed into a fully fledged publication funded by the Ujazdowski Castle Centre for Contemporary Art (CCA Ujazdowski). Briefly suspended in 2002, the magazine resumed online in 2004. Notwithstanding that after a decade and a half it became aligned with a museum—a state institution after all—it retained autonomy to publish what it had always pursued.`,
                  `I was the editor of Obieg from January 2016 until July 2020. On my watch, Obieg stopped exclusively publishing reviews of the Polish art scene (2004–2015), to the dismay of the Warsaw art world. But we were adamant: our aim was to connect with the international world of art, to enrich the local scene rather than function merely as a self-serving echo chamber of a publicly funded exhibition venue, with the “usual suspects” tooting their own horns. The vast majority of Obieg ’s readers from Poland and beyond were art professionals, students in their early twenties, and others appreciative of our longer reads.`,
                  `The editorial team rose to the challenge of rebranding the magazine so that it spoke about art all over the world but from the perspective of Warsaw and Central-Eastern Europe, producing a globally oriented, bilingual publication, while also negotiating the complex situation of being funded by a Polish public institution subordinate to the Ministry of Culture and National Heritage. The journal kept away from adverts, short formats, and gossip. Its ambition—at a time when borders seemed to be closing again rather than opening and when the language of art had become standardized—was to reach out to the world with a message of openness. Key to Obieg’s formula was the imperative to upgrade the art map of Central and Eastern Europe, aiming to make the “peripheries” visible.`,
                  `We produced fifteen issues online, publishing over two hundred texts, essays, and visual pieces commissioned for the magazine; more than 50 percent of the contributors—unusually for Poland—were female. The fact that Obieg was bilingual meant that it had two distinct audiences: the Polish and Warsaw art scenes, and the wider international art world. We experimented with the language of art criticism, drawing on the legacy of the early Obieg of the 1980s and ’90s. Unusual for the era of clickbait, we rejected the fodder of mass appeal, ambitiously opting for themed issues and in-depth formats without a paywall to encourage access. We surfed on the stormy seas of theory, always in search of honest and accessible ways of writing about art and culture. We chose to forego commercial success and media hype for the sake of establishing and developing non-obvious, yet precious, connections.`,
                  `Despite our meagre budget, we managed to increase our fees for authors—regardless of their celebrity status or passport—as well as the fees for translators, guest editors, and all freelancers involved, to increase our reach and international community. Because of this, I believe, we were successful. After writing an essay for Obieg, someone from Lagos was granted a stipend in Johannesburg. Someone else came up with the idea of a biennial in northern Chile. New projects were conceived in Kyiv, Rijeka, Vilnius, and many other places. Channeled through Warsaw, people and ideas connected in fruitful collaboration.`,
               ],
               preview: {
                  image: './images/article_1.jpeg',
                  caption: `Liz Craft, She is looking at me, 2015. Ceramic, aluminium, 84 x 82 x 12 cm.`
               },
            },
            {
               title: 'Jimmie Durham',
               slug: 'jimmie-durham',
               lead: `Let others wax eloquent about essences and fixed forms, ethnic identities, automobiles and Opera Houses. For Jimmie the humor was low key, bitter, and funny all at once, something on the move making you smile inwardly while trying to keep up with the shifting focus your unsettled understandings provoked.`,
               body: [
                  `The artworks exhibited at Casemore Kirkeby, however, make clear that in fact there were inklings of these developments a few years prior to the artist’s revelatory moment with the maps in the desk. Here, in a selection of sculptural paintings made from 1964 to ’67, Rapoport uses upholstery fabric as her primary substrate, both for tracing the gaudy floral patterns in paint, and for stenciling curvilinear, abstract forms that mark the first instances of the artist’s transcription of her visual language into her artwork. Viewed alongside several drawings made during the same period, the exhibition reveals Rapoport as a process-based artist whose primary medium is information.`,
                  `Directly across from the entrance to the exhibition is Bullseye (1966). Here, two large canvases are joined at an angle and affixed to the wall, like a big open book, revealing on each panel an abstracted white organic form bright against a dark ground. Rapoport attributes time spent studying with Erle Loran at UC Berkeley, and delving into his 1943 text, Cézanne’s Composition: Analysis of His Form with Diagrams and Photographs of His Motifs, as influential in her approach to composition, not just in terms of form and perspective, but as a means of diagramming her ideas. As such, closer examination reveals a careful systematization working within each panel. On the right, Rapoport completely obfuscates the gaudy floral upholstery fabric she uses as her substrate: we see a solid black background behind a white stenciled form encircling a cerulean, eye-like orb in the center of the canvas. Opposite is a fastidious game of hide and seek starting from the leftmost edge, where she shows a small slice of the original, unaltered fabric. From here, the flowery pattern creeps across the canvas, but Rapoport has painted over it, amplifying the colors, iterating within the system of the found textile to create her work.`,
                  `Across the gallery, Memoralia (1967), made just a year after Bullseye, is one of the strongest works in the exhibition, and shows further play with adding and manipulating information within an existing system. Here, the artist stacks two canvases, both covered again with upholstery fabric. We don’t see much of the bottom painting: it is slightly larger than its sister, and with just a few inches of the red and orange painted blooms revealed all the way around, it serves as a kind of dimensional frame for the artwork as a whole. On top, once again, is a loud flowery upholstery fabric, selectively traced and painted over by Rapoport. In two columns repeating vertically down the canvas, the artist stencils on a graphic, white shape that is at once a uterus and a blooming calla lily. In the negative space between each repetition of these patterns, the artist delineates another wavy, perhaps vaginal, organic form by painting over the upholstery pattern with an even, rich golden yellow. In Memoralia, these distinctly female, repeated shapes across the artwork are carefully plotted shifts and amplifications within the artist’s source material.`,
                  `The back gallery showcases imPOSSIBLE Conversations, a 2013 installation-based work that carries the thread of these early experiments forward into work made before Rapoport’s death in 2015 and expands their possibility for manipulation and iteration by adding a social dimension. Drawing on Alvin Roth and Lloyd Shapley’s economic theories about how audiences, institutions, and companies form stable matches within markets, Rapoport made black-and-white, 8 x 10” photographs of a selection of these early fabric paintings, and then paired each with an advertisement page from editions of The New York Times to form a collaged, composite artwork. She then invited ten viewers to assign a headline from other advertisements to the ten artworks, installing the new headlines directly above the composites. The resulting pairings are uncanny: both in the way her paintings echo the forms in the advertisements, and in how the viewers assign content and even humor to the visual information. In this work, as across this show, Rapoport is an artist-engineer, coding and riffing on the internal structures of her artworks to create new visual data for the viewer.`,
               ],
               preview: {
                  image: './images/article_2.jpeg',
                  caption: ''
               }
            },
            {
               author: 'Daniel Birnbaum',
               title: 'Mutual Aid, Social Distancing, and Dual Power in the State of Emergency',
               slug: 'mutual-aid-social-distancing-and-dual-power-in-the-state-of-emergency',
               lead: `For the elites, this might be an ungovernable world. But we still have many worlds to propagate, to live and love in comradely care.`,
               body: [
                  `In my 2016 article “Algo-ritmo,” I hyphenated the Spanish word for algorithm, creating a portmanteau consisting of the words “something” and “rhythm.”1 I played off the word “rhythm” to speak to what Derrida calls iterability in speech acts. Derrida argues that what makes speech acts effective are their iterability, that is, their repetition with alterity. For Derrida, it is alterity that enables conditions of possibility as opposed to determination—conditions of play. What McKittrick calls for in “Mathematics Black Life” is an alternative reading of the enumeration of colonial and anti-Black violence that renders an other-wise2 understanding, one that is based on an onto-epistemology that accounts for Black survival and those who lived.`,
                  `McKittrick’s focus on the “contours of Black life” as well as my focus on the “ritmo” of algo-ritmo imply patterns or rhythms that I would like to focus on here. I will argue that these patterns or rhythms are where the art or poethics of quantification lie. This is particularly important given that I will argue that algorithmic governance is a process of recursive rhythms and patterns. These rhythms and patterns are what preemptively shape a racializing affect, or what Jasbir Puar calls “slow life and debility.”3 I argue that algorithmic governance is made up of a system of modulating diffractive mechanisms (or diffractive modulators) that seek to compress the information patterns and rhythms of the world. Here, I see the potential of a poethics of other-wise diffractive patterns toward rerouting the onto-epistemology of the recursive system of algorithmic governance. I turn to algorithmic governance first.`,
                  `Since World War II, societies have been shifting from systems of institutional enclosures that discipline citizens’ ways of being to systems of infinite and continuous modulating mechanisms, which generatively control access to institutions and human behavior.4 Digital technologies and the “internet of things” have enabled increasingly distributed logics, rationalities, and practices of governance via cybernetic systems of communication and predictive control. While sovereign, discipline, and control technologies of capture continue to exist in concert, it is increasingly control that becomes the dominant logic of systems of governance.`,
                  `Within this context of cybernetic systems of governance, control has become the guaranteed form of “truth.” That is, the assured path to “truth” is to shape the futurity of “truth” in the present. Thus, rather than try to prevent or deter the existence of what is empirically verifiable, cybernetic systems of control work via a play on temporality that manufactures a becoming-assemblage such as an event, organization, or body in the form of a threat, an anxiety, or desire to mold futurity in the present (or present futurity). In other words, regardless of whether a becoming-assemblage is empirically or objectively verifiable, a future event is constructed based on already existing predispositions or beliefs. The operative logic for such an environment of manufactured futurity is preemptive action.`,
               ],
               preview: {
                  image: './images/article_3.jpeg',
                  caption: `Cosver of Obieg 12: “The Speed of Guccifer.” The studio of TV UNU in the Romanian city of Râmnicu Vâlcea (a.k.a. Hackerville). Photo: Nicoleta Moise.`
               },
            },
         ],

         information: {
            address: `172 Classon Avenue. Brooklyn, NY 11205. USA`
         },

         announcement: {
            message: `OUT NOW! Issue #123 “Dialogues on Recursive Colonialisms, Speculative Computation, and the Techno-social”`
         },
      };
   },

   getters: {
      getAddress(state) {
         return state.information;
      },

      getAnnouncement(state) {
         return state.announcement.message;
      },
   },

   modules: {
      // articles,
      books,
      journal,
      navigation,
      // pages
   },
};