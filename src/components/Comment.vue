<template>
    <div class="comment">
        <h5>
            By: <span id="colorText1"> {{ this.commentor }} </span> 
            <br>
            Date: {{ this.timeStamp }}  
        </h5>
        <p> 
            {{ this.content }}
            <br>
            <!-- {{ this.postID }} -->
        </p>
    </div>

</template>





<script>



export default {
    props: ["commentor", "content", "postID", "timeStamp"],

}
</script>




<style scoped>
    h2 {
        font-family: "Lucida Console";
    }
    /* Post poster and timestamp */
    h5 {
        line-height: 1.2;
    }
    #colorText1 {
        color: #bb64dd
    }
    #content {
        line-height: 1.2;
    }
    .comment {
        background: #2c2c2c;
        text-align: left;
        color: 94b2cf;
        font-family: "Lucida Console";
        

        /* Box design */
        border: 5px solid transparent;
        border-radius: 25px; /* Rounded edge */
        padding: 10px;
        margin: 20px;
    }
</style>


