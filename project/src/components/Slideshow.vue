<template>
	<div class="slideshow">

		<div class="slideshow__slides">
			<figure class="slideshow__slide" :data-text-after="currentSlide.caption">
				<img class="slideshow__img" :src="currentSlide.file" :alt="currentSlide.title">
				<figcaption class="slideshow__caption">{{ currentSlide.caption }}</figcaption>
			</figure>
			<div class="slideshow__dots">
			<button class="slideshow__dot" :class="{pressed: (index === this.index)}" @click="goToIndex(index)" v-for="(slide, index) in slides" :aria-label="`Go to image ${index + 1}`"></button>
		</div>
		</div>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				index: 0,
				pressed: 'button-pressed'
			};
		},

		computed: {
			slides() {
				return this.$store.getters.getSlides;
			},
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
	.slideshow__slides {
		position: relative;
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
		filter: brightness(100%);
	}

	.slideshow__img:hover {
		filter: brightness(90%);
	}

	.slideshow__caption {
		display: none;
		position: absolute;
		top: 50%;
		margin-top: -10%;
		left: 50%;
		margin-left: -30%;
		width: 60%;
		text-align: center;
		font-size: 50px;
		color: white;
		font-weight: 400;
	}

	.slideshow__img:hover + .slideshow__caption {
		display: block;
	}

	.slideshow__dots {
		position: absolute;
		bottom: 20px;
		left: 30px;
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
