<template>
   <div class="announcement__box"> 
      <div class="announcement__text">
         OUT NOW! Issue #123 “Dialogues on Recursive Colonialisms, Speculative Computation, and the Techno-social”
      </div>
   </div>
</template>

<script>
   export default {
      data() {
         return {
            slide: 0,
            sliding: null,
            direction: 'slide-left',
            show: true
         }
      },

      methods: {
         onSlideStart(slide) {
            this.sliding = true
         },
         onSlideEnd(slide) {
            this.sliding = false
         }
      }
   }
</script>

<style>
   @media screen and (max-width: 600px) {
      
   }

   .announcement__box {
      position: relative;
      left: 0%;
      right: 0%;
      top: 50px;
      bottom: 0%;
      width: 100%;
      height: 2.5em;
      background: #ADFF00;
   }

   .announcement__text {
      font-family: JetBrains Mono;
      font-weight: normal;
      font-size: 20px;
      line-height: 40px;
      height: 2.5em;
      animation: slide 5s infinite backwards;
      overflow: hidden;
   }
</style>