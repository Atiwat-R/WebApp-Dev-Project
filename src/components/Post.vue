<template>
    <div id="post" v-on:click="redirect()">
        <h2>{{ this.title }}</h2>
        <h6>
            By:  <span id="colorText1"> {{ this.poster }} </span>
            <br>
            Date: {{ this.timeStamp }}
        </h6>
        <p id="content"> 
            {{ this.content }}
            <!-- <br><br>This Post's ID: {{ this.postID }} -->
            <br>
        </p>

    </div>

</template>





<script>



export default {
    props: ["title", "poster", "content", "postID", "timeStamp"],

    methods: {
        redirect() {
            const aPost = {}
            aPost.title = this.title
            aPost.poster = this.poster
            aPost.content = this.content
            aPost.postID = this.postID
            aPost.timeStamp = this.timeStamp

            // Vuex action, sent this post's info as obj to state's universal storage
            this.$store.dispatch("setCommentPanelPostObj", aPost)

            // Automatically redirect to /commentpanel
            this.$router.push("/commentpanel")
        },

    },
}
</script>




<style scoped>

    h2 {
        font-family: "Lucida Console";
    }
    /* Post poster and timestamp */
    h6 {
        line-height: 1.2;
    }
    #colorText1 {
        color: #bb64dd
    }
    #content {
        line-height: 1.2;
    }
    #post {
        background: #2c2c2c;
        text-align: left;
        color: 94b2cf;
        font-family: "Lucida Console";
        

        /* Box design */
        border: 1.5px solid transparent;
        border-radius: 25px; /* Rounded edge */
        padding: 30px;
        margin: 20px;
    }
    #post:hover {
        border: 1.5px solid #bb64dd;
    }
</style>


