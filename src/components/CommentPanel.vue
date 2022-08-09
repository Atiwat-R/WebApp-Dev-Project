<template>

    <div v-show="this.show">
        
        <!-- Post itself -->
        <post
            :key="this.title"
            :title="this.title"
            :poster="this.poster"
            :content="this.content"
            :postID="this.postID"
            :timeStamp="this.timeStamp">
        </post>

        <!-- Comment Writer -->
        <comment-maker
            @get-all-relevant-comment="getAllRelevantComments">
        </comment-maker>

        <!-- Post's Comments -->
        <div class="comment-panel">
            <h3>Comments</h3>
            <comment
            v-for="aComment in allComments"
            :key="aComment.commentor"
            :commentor="aComment.commentor"
            :content="aComment.content"
            :postID="aComment.postID"
            :timeStamp="aComment.timeStamp">
            </comment>
        </div>


    </div>




</template>




<script>

import Post from "./Post.vue";
import Comment from "./Comment.vue";
import CommentMaker from "./CommentMaker.vue";
import AxiosService from "../services/AxiosService.js";

export default {

    components: { Post, Comment, CommentMaker },

    mounted() { // Mounted allows real-time update and shows new posts everytime it is created
        this.getAllRelevantComments()
    },

    computed: { // Variables in Computed are arbritary, always re-calculated through the function
        // All info required for post, reactively obtained from Vuex
        title: function () {
            return this.$store.getters.getCommentPanelPostObj.title
        },
        poster: function () {
            return this.$store.getters.getCommentPanelPostObj.poster
        },
        content: function () {
            return this.$store.getters.getCommentPanelPostObj.content
        },
        postID: function () {
            return this.$store.getters.getCommentPanelPostObj.postID
        },
        timeStamp: function () {
            return this.$store.getters.getCommentPanelPostObj.timeStamp
        },

        // For showing / hiding div
        show: function () {
            if (this.postID === undefined) return false
            return true
        }
    },

    data() {
        return {
            allComments: [],
        };
    },

    methods: {
        // Get all comments with same ID as postID from Firebase
        getAllRelevantComments() {
            AxiosService.getComment(this.postID)
            .then((response) => {
                const data = response.data;
                const localArr = []
                for (const i in data) {
                    // if (data[i].postID != this.postID) continue // Skip this comment if its not the comment under this post
                    const aComment = {}
                    aComment.commentor = data[i].commentor
                    aComment.content = data[i].content
                    aComment.postID = data[i].postID
                    aComment.timeStamp = data[i].timeStamp
                    localArr.unshift(aComment) // Add to beginning of Array to display latest post first
                }
                this.allComments = localArr
            })        
            .catch((error) => {
                console.log(error);
            });
        },

    },
}
</script>



<style scoped>

</style>



