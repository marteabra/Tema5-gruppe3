export default {
   methods: {
      metaTags(meta) {
			const currentURL = window.location.origin + this.$route.path;
			
			if (meta.title) {
				document.title = meta.title;
			}

			if (meta.description) {
				document.querySelector('meta[name="description"]').setAttribute('content', meta.description);
				document.querySelector('meta[property="og:description"]').setAttribute('content', meta.description);
			}

			if (meta.image) {
				document.querySelector('meta[property="og:image"]').setAttribute('content', meta.image);
			}

			document.querySelector('link[rel="canonical"]').setAttribute('href', currentURL);
			document.querySelector('meta[property="og:url"]').setAttribute('content', currentURL);
		}
   }
}