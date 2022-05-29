<template>
  <div v-if="isShow" class="subscribe">
    <div v-on:click="isHidden = !isHidden" v-if="isHidden" class="subscribe__text">
      <span class="full-text">
        Subscribe to the in(dex) newsletter for monthly updates
      </span>

      <div class="short-text">
        Get monthly updates by e-mail
      </div>
      
      <button @click="isShow = !isShow" class="subscribe__close"></button>
    </div>

    <div v-if="!isHidden" class="subscribe__enter">
      <input placeholder="enter your e-mail" type="email" v-model="email" />
      <button @click="isShow = !isShow" class="subscribe__enter--button">
        Subscribe
      </button>
      <button @click="isShow = !isShow" class="subscribe__close"></button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      isShow: true,
      isHidden: true,
      email: "",
    };
  },
};
</script>

<style>
.subscribe {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  z-index: 1;
}

.subscribe__text {
  margin: 0 20px;
  margin-bottom: 20px;
  background: var(--secondary);
  border-radius: 10px;
  font-size: var(--body-font-size);
  padding-top: 8.5px;
  padding-bottom: 8.5px;
}

.subscribe__text:hover {
  background: var(--highlight);
}

.subscribe__enter {
  margin: 0 20px;
  background: var(--secondary);
  border-radius: 10px;
  height: 62px;
  font-size: var(--body-font-size);
  padding-top: 8px;
}

input[type="email"] {
  border: none;
  background: var(--secondary);
  border-bottom: 1px solid #000000;
  padding-right: 240px;
}

.subscribe__enter--button {
  background: var(--highlight);
  border-radius: 10px;
  width: 305px;
}

/* bytte text til mobil */
.short-text {
  display: none;
}

@media screen and (max-width: 800px) {
  .short-text {
    display: inline-block;
  }
  .full-text {
    display: none;
  }
}

/* x-icon */
.subscribe__close {
  width: 30px;
  height: 30px;
  position: relative;
  float: right;
  padding-right: 60px;
  padding-bottom: 14px;
}
.subscribe__close:after {
  content: "";
  height: 30px;
  border-left: 2px solid rgb(0, 0, 0);
  position: absolute;
  transform: rotate(45deg);
  left: 28px;
}

.subscribe__close:before {
  content: "";
  height: 30px;
  border-left: 2px solid rgb(0, 0, 0);
  position: absolute;
  transform: rotate(-45deg);
  left: 28px;
}
</style>
