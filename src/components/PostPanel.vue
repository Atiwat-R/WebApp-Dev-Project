<template>

    <div class="post-panel">
        <h2>This is Post Panel</h2>
        <post
        v-for="aPost in allPosts"
        :key="aPost.title"
        :title="aPost.title"
        :poster="aPost.poster"
        :content="aPost.content"
        :postID="aPost.postID">
        </post>
    </div>


</template>




<script>

import Post from "./Post.vue";

export default {
    inject: ["allPosts"],
    components: { Post },
}
</script>



<style scoped>
    .post-panel {
        background: orange;
    }
</style>



