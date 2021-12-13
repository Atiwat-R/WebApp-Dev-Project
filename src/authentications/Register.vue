<template>
  <div class="register">
        <!-- <h2>Register</h2>  -->

        <form @submit.prevent="registerUser">
            <!-- Put in Register info -->
            <p>
                <label for="displayName"></label>
                <input id="displayName" v-model="displayName" placeholder="Display Name" />
            </p>
            <p>
                <label for="email"></label>
                <input id="email" v-model="email" placeholder="Email" />
            </p>
            <p>
                <label for="password"></label>
                <input id="password" v-model="password" placeholder="Password" />
            </p>
            <button id="registerButton">Register</button>       
        </form>

        <!-- Go to Login -->
        <p>
            <router-link to="/login">
            Already have an account?
            </router-link>
        </p>   

  </div>
</template>



<script>

import { getAuth, createUserWithEmailAndPassword, updateProfile  } from "firebase/auth";

export default {
    data() {
        return {
            email: "",
            password: "",
            displayName: "",
        };
    },

    methods: {
        registerUser() {
            const auth = getAuth()
            createUserWithEmailAndPassword(auth, this.email, this.password)
                .then((userCred) => {
                    // Update Profile to set displayName
                    updateProfile(userCred.user, {
                        displayName: this.displayName
                    })
                    // alert("Account Created")
                })
                .catch((error) => {
                    console.log(error.code);
                    console.log(error.message);
                });
        }
    }

}
</script>

<style>

    /* Share designs with ones in Login */

    /* Input button design */
    #registerButton {
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
    #registerButton:hover {
        background-color: #bb64dd;
    }

</style>