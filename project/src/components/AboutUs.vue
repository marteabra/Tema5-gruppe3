<template>
    <div v-for="page in pageContent" class="h1">
        {{ page.content.title }}

    </div>

        <div>
            {{ body }}
        </div>

</template>

<script>
    export default {
        data() {
            return {
                body: [''],
            };
        },

        computed: {
            pageContent() {
                return this.$store.getters.getPageContent;
            },
        },

        mounted() {
            this.body = this.$store.state.pages.content.body;
            console.log(this.store);
        },
    }
</script>

<style>

</style>