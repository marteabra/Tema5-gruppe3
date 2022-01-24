<template>
    {{ articles }}
    <div class="title">
        {{ title }} 
    </div>

    <div> 
        {{ body }} 
    </div>
</template>

<script>
    export default {
        data() {
            return {
                articles: [],
                body: '',
                title: '',
            };
        },

        mounted: function() {
            this.articles = this.$store.state.articles;
            this.body = this.$store.state.articles[2].body;
            this.title = this.$store.state.articles[2].title;
            console.log(this.$store.state.articles);
        },
    };
</script>

<style>
    .title {
        position: relative;
        top: 50;
    }
</style>