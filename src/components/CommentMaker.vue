<template>
    
    <form @submit.prevent="createComment"> 

        <textarea id="commentBox" placeholder="Write a Comment" cols="100" rows="5" v-model="content"></textarea>
        <br>
        <button id="postCommentButton">Post Comment</button>

    </form>
    

</template>




<script>

import AxiosService from "../services/AxiosService.js";
import { getAuth } from 'firebase/auth';

export default {

    data() {
        return {
            content: "",
        };
    },

    emits: [ "get-all-relevant-comment" ],

    methods: {

        resetInput() {
            this.content = "";
        },
        createComment() { // Package the input into JSON and sent it to Database
            let json = {
                commentor: getAuth().currentUser.displayName, // Get User from firebase auth
                content: this.content,
                postID: this.$store.getters.getCommentPanelPostObj.postID, // Taken from Vuex
                timeStamp: new Date().toLocaleDateString([], {year: 'numeric', month: 'long', day: 'numeric'}) + ' at ' + new Date().toLocaleTimeString('en-GB', {hour: '2-digit', minute:'2-digit'}), // Time this is posted by user
            }
            this.resetInput();
            AxiosService.postComment(json)
            .then((response) => {
                console.log(response.status);
                this.$emit("get-all-relevant-comment") // Once comment are send to DB, reload the comment section on CommentPanel
            })
            .catch((error) => {
                console.log(error);
            })
            
        },

  },
};
</script>




<style scoped>

    /* Input button design */
    #postCommentButton {
        font-family: "Lucida Console";
        background-color: #6f009b; 
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
    }
    #postCommentButton:hover {
    background-color: #bb64dd;
    }

    /* Designs of input area */
    textarea {
        color: white;
        background-color: #414141;
    }
    textarea::placeholder  {
        color: rgb(161, 161, 161);
    }


</style>







