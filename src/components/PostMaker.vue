<template>

    <h1>Write Your Post</h1>
    
    <form @submit.prevent="createPost"> <!-- summit.prevent prevents the page from reloading once the form is submitted -->

        <h5>Title:</h5> 
        <!-- Use textarea for paragraph-size input box -->
        <textarea name="paragraph_title" cols="50" rows="1" v-model="title"></textarea>
        <br>
        <h5>Content:</h5> 
        <textarea name="paragraph_content" cols="50" rows="10" v-model="content"></textarea>
        <br>
        <button v-on:click="createPost">Create Post</button>

    </form>
    <br><br><br>

</template>




<script>

import AxiosService from "../services/AxiosService.js";

export default {
  inject: ["studentId"],
  props: ["courseId", "courseName"],
  data() {
    return {
        title: "",
        poster: "",
        content: "",
    };
  },
  methods: {

    resetInput() {
        this.title = "";
        this.poster = "";
        this.content = "";
    },
    createPost() { // Package the input into JSON and sent it to Database
        let json = {
            title: this.title,
            poster: "TempUser22",
            content: this.content,
            postID: this.generateID(),
        }
        this.resetInput();
        AxiosService.postPost(json)
        .then((response) => {
            // alert(response.status);
            console.log(response.status);
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

</style>







