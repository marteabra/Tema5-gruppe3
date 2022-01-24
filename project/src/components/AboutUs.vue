<template>
    <h1>
        {{ title }}
    </h1>

    <div>
        {{ body }}
    </div>
    

</template>

<script>
export default {
    data() {
        return {
            pages: [],
            body: '',
            title: '',
        };
    },

    mounted: function() {
        this.pages = this.$store.state.pages;
        this.body = this.$store.state.pages[0].content.body;
        this.title = this.$store.state.pages[0].content.title;
        console.log(this.$store.state.pages);
    },
};
</script>

<style>
</style>