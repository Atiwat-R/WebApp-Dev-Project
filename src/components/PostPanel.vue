<template>

    <div class="post-panel">
        <post
            v-for="aPost in allPosts"
            :key="aPost.title"
            :title="aPost.title"
            :poster="aPost.poster"
            :content="aPost.content"
            :postID="aPost.postID"
            :timeStamp="aPost.timeStamp">
        </post>
    </div>


</template>




<script>

import Post from "./Post.vue";
import AxiosService from "../services/AxiosService.js";

export default {
    components: { Post },

    mounted() { // Mounted allows real-time update and shows new posts everytime it is created
        this.getAllPosts();
    },

    data() {
        return {
            allPosts: [],
        };
    },

    methods: {

        // Get all posts from Firebase
        getAllPosts() {
            AxiosService.getPost()
            .then((response) => {
                const data = response.data;
                const localArr = []
                for (const i in data) {
                    const aPost = {}
                    aPost.title = data[i].title
                    aPost.poster = data[i].poster
                    aPost.content = data[i].content
                    aPost.postID = data[i].postID
                    aPost.timeStamp = data[i].timeStamp
                    localArr.unshift(aPost) // Add to beginning of Array to display latest post first
                }
                this.allPosts = localArr
            })        
            .catch((error) => {
                console.log(error);
            });
        },


    },
}
</script>



<style scoped>
    /* .post-panel {
        
    } */
</style>



