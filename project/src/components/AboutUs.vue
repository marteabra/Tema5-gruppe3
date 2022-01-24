<template>
    <h1 v-for="p in pages">
        {{ p.content.title }}
    </h1>

    <div v-for="(b, index) in body" :class="'paragraph' + index">
        {{ b }}
    </div>


</template>

<script>
export default {
    computed: {
        pages() {
            return this.$store.state.pages;
        }
    },

    mounted: function() {
        this.pages = this.$store;
        this.body = this.$store.state.pages[0].content.body;
        this.title = this.$store.getters.pages[0].content.title;
        console.log(this.$store.state.pages);
    },
};
</script>

<style>
</style>