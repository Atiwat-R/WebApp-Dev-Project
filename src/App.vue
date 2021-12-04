<template>

  <h1>Discussion Forum</h1>

  <!-- Navigation Panel -->
  <router-link to="/postpanel"> Home </router-link>
  <router-link to="/postmaker"> Create Post </router-link>

  <router-view></router-view>



  
</template>

<script>



export default {

  provide: { // Provide pass down data to all its child
    allPosts: // a list containing all the posts.
    [
      {
        title: "My First Post",
        poster: "Admin1",
        content: "Hello friend! \nThis is the first post. Happy discussion!",
        postID: "80b988e6-5354-4d8b-8a3a-5f9a6ec96aaa"
      },
      {
        title: "Where can I find great tonkatsu restaurant?",
        poster: "Hades Jordann",
        content: "I currently live in Terra Festa and is searching for a place with good tonkatsu. \nAny recommendations are appreciated.",
        postID: "d78a0cb4-edb5-4582-a715-8b04c817a53e"
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


a {
  background-color: #008cba; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
a.router-link-active {
  background-color: #4caf50;
}
</style>
