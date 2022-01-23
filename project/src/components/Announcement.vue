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
            
         }
      },
   }
</script>

<style>
   /* content box */
   .announcement__box {
      position: relative;
      left: 0;
      right: 0;
      top: 50px;
      bottom: 0;
      height: 3.5em;
      width: 100%;
      background: #ADFF00;
   }

   /* content-text styling */
   .announcement__text {
      display: inline-block;
      width: 2000px;
      font-family: JetBrains Mono;
      font-weight: normal;
      font-size: var(--body-font-size);
   }

   /* content-text animation, direction, placement and duration */
   .announcement__text > * {
      position: relative;
      top: 5;
      animation: 23s linear 0s infinite move;
   }

   .announcement__text > *.min {
      min-width: 100%;
   }

   @keyframes move {
      from {
         left: 1500px;
      }
      
      to {
         left: -2000px;
      }
   }

   @media screen and (max-width: 938px) {
      .announcement__box {
         height: 3.3em;
      }
      .announcement__text {
         position: relative;
         top: 5;
         font-size: 25px;
      }
   }
</style>