import { createApp } from 'vue'
import App from './App.vue'
import "nprogress/nprogress.css"


import PostPanel from "./components/PostPanel.vue";
import PostMaker from "./components/PostMaker.vue";
import CommentPanel from "./components/CommentPanel.vue";
import Login from "./authentications/Login.vue";
import Register from "./authentications/Register.vue";
import UserProfile from "./authentications/UserProfile.vue";


// Routing to different pages
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: "/", redirect: "/postpanel" },
      { path: "/postpanel", component: PostPanel },
      { path: "/postmaker", component: PostMaker },
      { path: "/commentpanel", component: CommentPanel },
      { path: "/login", component: Login },
      { path: "/register", component: Register },
      { path: "/userprofile", component: UserProfile },
    ],
  });




// Firebase authentication
import { initializeApp } from "firebase/app";
import { browserLocalPersistence, getAuth, setPersistence } from "firebase/auth";

// Your web app's Firebase configuration. This is from the Firebase website
const firebaseConfig = {
  apiKey: "AIzaSyDED1dA2VLWkowT7U_j_cMRfa1PQsmIA0c",
  authDomain: "webapp-discussion-forum.firebaseapp.com",
  databaseURL: "https://webapp-discussion-forum-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "webapp-discussion-forum",
  storageBucket: "webapp-discussion-forum.appspot.com",
  messagingSenderId: "585429205844",
  appId: "1:585429205844:web:3bde58a1646e6cf257bec1"
};

// Initialize Firebase
const appfb = initializeApp(firebaseConfig);

// Set persistence
export const auth = getAuth(appfb);
setPersistence(auth, browserLocalPersistence)






// Vuex for keeping data that can be accessed by any component
import { createStore } from 'vuex'

const store = createStore({

    state: { // Store data universally accessible by all components
      commentPanelPostObj: {}, // Obj data of Post to exist in Comment Panel
    },

    mutations: { // Make final changes to state
      setCommentPanelPostObj(state, newPost) {
        state.commentPanelPostObj = newPost
      },
    },

    actions: { // Functions to call in other components to activate mutations
      setCommentPanelPostObj(state, newPost) {
        state.commit("setCommentPanelPostObj", newPost)
      },
    },

    getters: { // Getter that returns data from state
      getCommentPanelPostObj(state) {
        return state.commentPanelPostObj
      },
    },
})




createApp(App).use(store).use(router).mount('#app');




// Testing Note:
/**
 * When testing on Google Chrome, you can right-click and 
 * go to inspect to look at how HTML is loaded or what is printed in
 * console to see if certain processes are successful.
 * 
 * npm install dependencies
 * Updates the files mainly in node_modules file
 * along with package.json and package-lock.json
 * so if anything goes wrong regarding downloading dependencies,
 * you can delete node_modules and reinstall it
 * btw don't use --save tag for this project
 * 
 * Use Vuex
 * https://next.vuex.vuejs.org/guide/#the-simplest-store
 * npm install vuex@next
 * 
 * Using Firebase Web version 9
 * 
 * Dependencies so far:
 * axios
 * nprogress
 * vue-router
 * vuex
 * firebase
 * 
 */


/* Some accounts

Jim Avis
jimavis@email.osd
siege2233

Tor Binadez
torbin@email.com
torbinxproteinz

Babel
babel@xmail.oar
thefullmoonrises

*/



