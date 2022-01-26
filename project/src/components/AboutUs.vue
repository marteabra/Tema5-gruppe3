<template>
    <div v-for="p in pages">
        <h1>
            {{ p[0].content.title }}
        </h1>

        <p>
            {{ p[0].content.body }}
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