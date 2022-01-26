<template>
    <Header />
    <Announcement />
    <Birnbaum />
    <Gutfranski />
    <Footer />
</template>

<script>
    import Header from "../components/Header.vue";
    import Announcement from "../components/Announcement.vue";
    import Birnbaum from "../components/Birnbaum.vue";
    import Gutfranski from "../components/Gutfranski.vue"
    import Footer from "../components/Footer.vue";

    export default {
        components: {
            Header,
            Announcement,
            Birnbaum,
            Gutfranski,
            Footer
        },
    };
</script>

<style>
    Header {
        z-index: 1;
        top: 0;
    }

    Footer {
        position: relative;
        bottom: 0;
    }
</style>