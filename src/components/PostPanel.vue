<template>
    This is Post Panel
    
    <div>
        <post
        v-for="aPost in allPosts"
        :key="aPost.title"
        :title="aPost.title"
        :content="aPost.content">
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

</style>



