<template>


  <h1>Discussion Forum</h1>

  <router-view></router-view>

  
</template>

<script>



export default {


  provide: { // Provide pass down data to all its child
    allPosts: // a list containing all the posts.
    [
      {
        title: "My First Post",
        content: "Hello friend! \nThis is the first post. Happy discussion!"
      },
      {
        title: "Where can I find great tonkatsu restaurant?",
        content: "I currently live in Terra Festa and is searching for a place with good tonkatsu. \nAny recommendations are appreciated."
      },
    ]
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
