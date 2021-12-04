<template>
    <div class="post" v-on:click="redirect()">
        <h3>{{ this.title }}</h3>
        <h5>By: {{ this.poster }}</h5>
        <p> 
            {{ this.content }}
            <br><br>
            This Post's ID: {{ this.postID }}
            <br>
        </p>
    </div>

</template>





<script>



export default {
    props: ["title", "poster", "content", "postID"],

    methods: {
        redirect() {
            alert("Redirecting to comments of post: ".concat(this.title).concat("..."));
        },

        

    },
}
</script>




<style scoped>
    .post {
        background: salmon;
        text-align: left;
    }
</style>


