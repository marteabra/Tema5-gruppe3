<template>
   <div class="announcement__box"> 
      <div class="announcement__text">
         <span>OUT NOW! Issue #123 “Dialogues on Recursive Colonialisms, Speculative Computation, and the Techno-social”</span>
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
   @media screen and (max-width: 938px) {
      
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
      font-size: var(--body-font-size);
      line-height: 40px;
      height: 1.5em;
      overflow: hidden;
   }

   .announcement__text > * {
      position: relative;
      animation: 10s linear 0s infinite alternate move;
   }

   .announcement__text > *.min {
      min-width: 100%;
   }

   @keyframes move {
      0%,
      25% {
         transform: translateX(0%);
         left: -100%;
      }
      75%,
      100% {
         transform: translateX(-100%);
         left: 100%;
      }
   }

</style>