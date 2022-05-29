<template>
  <h2 class="section__header--padding--less">
    Journal
  </h2>

  <div class="slideshow">
    <figure class="slideshow__slide" :data-text-after="currentSlide.caption">

      <img class="slideshow__img" :src="currentSlide.file" :alt="currentSlide.title" />

      <div class="slideshow__overlay" @click="next">
      </div>

      <div class="slideshow__dots">
        <button class="slideshow__dot" :class="{ pressed: index === this.index }" @click="goToIndex(index)" v-for="(slide, index) in slides" :aria-label="`Go to image ${index + 1}`"></button>
      </div>
    </figure>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      pressed: "button-pressed",
    };
  },

  computed: {
    slides() {
      return this.$store.getters.getSlides;
    },
    
    currentSlide() {
      return this.slides[this.index];
    },
    slideLength() {
      return this.slides.length;
    },
  },

  methods: {
    goToIndex(index) {
      this.index = index;
    },
    next() {
      if (this.index === this.slideLength - 1) {
        this.index = 0;
      } else {
        this.index++;
      }
    },
  },
};
</script>

<style>
/*	slideshow container */
.slideshow {
  position: relative;
  width: 100%;
  height: 100%;
  margin: auto;
}

.slideshow__heading {
  text-align: center;
  margin: 10px;
}

/*	slideshow content	*/
.slideshow__slide {
  height: auto;
  cursor: pointer;
}

.slideshow__img {
  height: 100%;
  object-fit: contain;
}

.slideshow__slide:hover > .slideshow__overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.3;
}

.slideshow__slide::after {
  position: absolute;
  top: 50%;
  margin-top: -8%;
  left: 50%;
  margin-left: -35%;
  width: 70%;
  text-align: center;
  font-size: 3vw;
  color: white;
  font-weight: 400;
  content: attr(data-text-after);
  display: none;
}

.slideshow__slide:hover::after {
  display: block;
}

.slideshow__dots {
  position: absolute;
  bottom: 5%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  width: 100%;
}

.slideshow__dot {
  cursor: pointer;
  width: 0.8em;
  height: 0.8em;
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
