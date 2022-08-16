<template>
  <div class="login">

        <!-- <h2> Login </h2>  -->

        <form @submit.prevent="loginUser">
            <!-- Put in Login info -->
            <p>
                <!-- Email -->
                <label for="email"></label>
                <input id="email" v-model="email" placeholder="Email" />
            </p>
            <p>
                <!-- Password -->
                <!-- v-if/v-else is for hiding password -->
                <label for="password"></label>
                <input v-if="passwordHidden" type="password" id="password" v-model="password" placeholder="Password" />
                <input v-else type="text" id="password" v-model="password" placeholder="Password" />
            </p>

            <p>
                <!-- Toggle password visibility button -->
                <img v-if="passwordHidden" src="../assets/image/icon_visibility_off.png" @click="showPassword()" />
                <img v-else src="../assets/image/icon_visibility_on.png" @click="showPassword()" />
            </p>

            <!-- Login -->
            <button id="loginButton">Login</button>      
        </form>

        

        <!-- Toggle password visibility button -->
        <!-- <p>
            <img v-if="passwordHidden" src="../assets/image/icon_visibility_off.png" @click="showPassword()" />
            <img v-else src="../assets/image/icon_visibility_on.png" @click="showPassword()" />
        </p> -->

        <!-- Go to Register -->
        <p>
            <router-link to="/register">
            Create an Account
            </router-link>
        </p>    

  </div>
</template>



<script>

import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";

export default {
    data() {
        return {
            email: "",
            password: "",
            passwordHidden: true,
        };
    },

    methods: {
        loginUser() {
            const auth = getAuth()

            signInWithEmailAndPassword(auth, this.email, this.password)
                .then((userCred) => {
                    console.log(userCred.user);
                })
                .catch((error) => {
                    console.log(error.code);
                    console.log(error.message);
                    alert(error.message)
                });
        },

        // Change visibility of password input
        showPassword() {
            this.passwordHidden = !this.passwordHidden
        },
    }

}
</script>

<style>

    /* Designs of input area */
    #email, #password {
        color: white;
        background-color: #414141;
        font-family: "Lucida Console";
    }
    #email::placeholder, #password::placeholder  {
        color: rgb(161, 161, 161);
    }

    /* Input button design */
    #loginButton {
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
    #loginButton:hover {
        background-color: #bb64dd;
    }

    /* Show password button */
    #showPassword {
        color: white;
        background-color: #414141;
        font-family: "Lucida Console";
        color: rgb(161, 161, 161);
    }

</style>