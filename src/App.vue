<template>

  <body>
    
    <h1 id="title"> Joshbell City Forum </h1>

    <!-- Navigation Panel. Won't appear in /login or /register -->
    <div class="navbar" v-show="$route.path==='/login' || $route.path==='/register' ? false : true">

      <p>Welcome, <span id="colorText1"> {{ this.getUserName() }} </span> </p>

      <router-link to="/postpanel"> Home </router-link>
      <router-link to="/postmaker"> Create Post </router-link>
      <router-link to="/commentpanel"> Comments </router-link>
      <router-link to="/userprofile"> Profile </router-link>

      <button id="logoutButton" @click="logout">Logout</button>

    </div>

    <!-- Display components -->
    <router-view></router-view>

    <p id="siteNote">
      <br>
      Created and Owned by Atiwat Rachatawarn
      <br><br><br>
    </p>

  </body>



  
</template>

<script>

import { onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getAuth } from "firebase/auth";

export default {

  // Firebase auth roughly followed from https://www.youtube.com/watch?v=FMPHvxqDrVk
  // NOTE: The video use firebase Web version 8; I use Web version 9
  // Doc: https://firebase.google.com/docs/reference/js/auth?hl=en
  setup() {
    const router = useRouter();
    const route = useRoute();

    onBeforeMount( function () {
      getAuth().onAuthStateChanged(function (user) {
        if (!user) {
          router.replace("/login") // If there's no user, move back to Login page
        }
        else {
          // If there's user and we're in login/register page, move to home page
          if (route.path == "/login" || route.path == "/register") router.replace("/")
        }
      })
    })
    

  },



  methods: {

    // Logout
    logout() {
      getAuth()
      .signOut()
      .then(() => console.log("Signed Out"))
      .catch((error) => console.log(error.message))
    },

    getUserName() {

      if (getAuth().currentUser != null) {
        // return getAuth().currentUser.email.split('@')[0]
        return getAuth().currentUser.displayName
      }
      else return ""

    }

  },



}
</script>





<style>

/* Set entire web's background to black */
body {
  background-color: #121212;
}
/* Entire app */
#app {
  font-family: "Lucida Console", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #bad2e9;
  margin-top: 60px;
}
#colorText1 {
  color: #bb64dd
}


/* Links design (router links too) */
a, #logoutButton {
  font-family: "Lucida Console";
  background-color: #121212; 
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
#logoutButton {
  background-color: #6f009b; 
}

/* Change color while hovering */
a:hover, a.router-link-active {
  background-color: #414141;
}
#logoutButton:hover {
  background-color: #bb64dd;
}

#siteNote {
  font-size: 12px;
}


</style>
