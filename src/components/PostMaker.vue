<template>

    <!-- <h1>Write Your Post</h1> -->
    
    <form @submit.prevent="createPost"> <!-- @submit.prevent="createPost" prevents the page from reloading once the form is submitted -->

        <h5>Title:</h5> 
        <!-- Use textarea for paragraph-size input box -->
        <textarea name="paragraph_title" cols="50" rows="1" v-model="title"></textarea>
        <br>
        <h5>Content:</h5> 
        <textarea name="paragraph_content" cols="50" rows="10" v-model="content"></textarea>
        <br>
        <button id="createPostButton">Create Post</button>

    </form>
    <br><br><br>

</template>




<script>

import AxiosService from "../services/AxiosService.js";
import { getAuth } from 'firebase/auth';

export default {
  data() {
    return {
        title: "",
        content: "",
    };
  },
  methods: {

    resetInput() {
        this.title = "";
        this.content = "";
    },
    createPost() { // Package the input into JSON and sent it to Database
        let json = {
            title: this.title,
            poster: getAuth().currentUser.displayName, // Get User from firebase auth
            content: this.content,
            postID: this.generateID(),
            timeStamp: new Date().toLocaleDateString([], {year: 'numeric', month: 'long', day: 'numeric'}) + ' at ' + new Date().toLocaleTimeString('en-GB', {hour: '2-digit', minute:'2-digit'}), // Time this is posted by user
        }
        this.resetInput();
        AxiosService.postPost(json)
        .then((response) => {
            // alert(response.status);
            console.log(response.status);
            this.$router.push("/postpanel")
        })
        .catch((error) => {
            // alert(error);
            console.log(error);
        })
    },
    generateID() { // Generate random uuid
        // Code credit: https://gist.github.com/jed/982883
        var uuid = () => ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,c =>(c^(window.crypto||window.msCrypto).getRandomValues(new Uint8Array(1))[0]&15>>c/4).toString(16));
        return uuid(1);
    },

  },
};
</script>




<style scoped>

    /* Input button design */
    #createPostButton {
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
    #createPostButton:hover {
    background-color: #bb64dd;
    }

    /* Designs of input area */
    textarea {
        color: white;
        background-color: #414141;
    }

</style>







