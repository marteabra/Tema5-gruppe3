<template>
	<div class="slideshow">

		<div class="slideshow__slides">
			<figure class="slideshow__slide">
				<img class="slideshow__img" :src="currentSlide.file" :alt="currentSlide.title">
				<figcaption v-if="showCaption" class="slideshow__caption">{{ currentSlide.caption }}</figcaption>
			</figure>
		</div>

		<div class="slideshow__dots">
			<button class="slideshow__dot" :class="{pressed: (index === this.index)}" @click="goToIndex(index)" v-for="(slide, index) in slides" :aria-label="`Go to image ${index + 1}`"></button>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				index: 0,
				showCaption: false,
				slides: [
					{ title: 'image by April Bey', caption: '“And My Flames Stay Till You Get Out My Way” Museum für Moderne Kunst April Bey', file: '/images/journal_1.jpeg' },
					{ title: 'image by Kenny Fries', caption: '“Crip Time” Vienna Art Week Kenny Fries', file: '/images/journal_2.jpeg' },
					{ title: 'image by Novuyo Moyo', caption: '“Losing Control” Alte Pinakothek Novuyo Moyo', file: '/images/journal_3.jpeg' },
				],
				pressed: 'button-pressed'
			};
		},

		computed: {
			currentSlide() {
				return this.slides[this.index];				
			}
		},

		methods: {
			goToIndex(index) {
				this.index = index;
			}
		}
	};
</script>

<style>
	/* .slideshow {
		position: absolute;
		width: 90vw;
		height: 90vh;
		background-color: aqua;
	} */

	.slideshow:hover .slideshow__caption {
		opacity: 1;
	}

	.slideshow__slides {
		position: absolute;
		top: 50;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.slideshow__slide {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.slideshow__img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.slideshow__caption {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		text-align: center;
		font-size: 50px;
		color: white;
		font-weight: 400;
		padding: 0.5em;
	}

	.slideshow__extra {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
	}

	.slideshow__dots {
		position: absolute;
		bottom: 0;
		left: 50px;
		transform: translateY(100%);
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		padding: 0.5em;
		width: 100%;
	}

	.slideshow__dot {
		cursor: pointer;
		--dot-size: 0.8em;
		min-width: var(--dot-size);
		min-height: var(--dot-size);
		display: block;
		border: 1px solid white;
		border-radius: 100%;
		background-color: transparent;
	}

	.pressed {
		background-color: white;
	}

	.slideshow__dot + .slideshow__dot {
		margin-left: 0.5em;
	}
</style>
