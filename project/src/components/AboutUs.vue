<template>
    {{ pages }}

    {{ title }}

    {{ body }}

</template>

<script>
export default {
    computed: {
        pages() {
            return this.$store.state.pages;
        },

        title() {
            return this.$store.state.pages[0].content.title;
        },

        body() {
            return this.$store.state.pages[0].content.body;
        },
    },
};
</script>

<style>
</style>