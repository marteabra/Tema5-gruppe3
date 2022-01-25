<template>
    <div class="gutfranski-article">

        <div class="gutfranski-article__author-name">Krzysztof Gutfranski</div>
        <div class="gutfranski-article__article-title"> {{ article.title }} </div>

        <figure>
            <img :src="article.preview.image" :alt="article.slug">
            <figcaption> {{ article.preview.caption }} </figcaption>
        </figure>

        <article class="gutfranski-article__main-article">
            <div> {{ article.body[0] }} </div> 
            <div> {{ article.body[1] }} </div>  
            <div> {{ article.body[2] }} </div>
            <div> {{ article.body[3] }} </div>
            <div> {{ article.body[4] }} </div>
        </article>
             
    </div>
</template>

<script>
    export default {
        data() {
            return {
             
            }
        },

        computed: {
            article() {
                return this.$store.getters.getArticle[0];
            }
        }
    };
</script>

<style>
    .gutfranski-article__author-name {
        font-size: var(--body-font-size);
        line-height: var(--body-line-height);
        margin-left: 100px;
        margin-top: 40px;
    }

    .gutfranski-article__article-title {
        font-size: var(--heading-font-size);
        line-height: var(--heading-line-height);
        margin-left: 100px;
        margin-bottom: 40px;        
    }

    figcaption {
        font-size: var(--caption-font-size);
        line-height: var(--caption-line-height);
    }

    .gutfranski-article__main-article {
        width: 70%;
        margin: auto;
        margin-top: 100px;
        font-size: var(--body-font-size);
        line-height: var(--body-line-height);
    }

    .gutfranski-article__main-article div {
        margin-bottom: 30px;
    }
</style>