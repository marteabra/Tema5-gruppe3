<template>
<div v-for="(p, index) in pages" :key="index">
    <p :class="'p__' + index">
        {{ p.content.body }}
    </p>
</div>
    

</template>

<script>
export default {
    computed: {
        pages() {
            return this.$store.state.pages;
        },

        title() {
            return this.$store.state.pages[0].content.body;
        },

        body() {
            return this.$store.state.pages[0].content.title;
        },
    },
};
</script>

<style>
</style>