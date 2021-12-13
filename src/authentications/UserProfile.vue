<template>
  <div id="userProfile">
        <div id="userProfileTitle"> <h2>{{ this.oldDisplayName }}'s User Profile </h2> </div> 

        <form @submit.prevent="updateUser">

            <h5> Email: {{ this.email }} </h5>
            <h5> UID: {{ this.uid }} </h5>
            <h5> Register Date: {{ this.metadata.creationTime }} </h5>
            <h5> Last Login: {{ this.metadata.lastSignInTime }} </h5>

            <p>
                <label for="displayName"></label>
                <input id="displayName" v-model="displayName" placeholder="Change Display name" />
                <button id="confirmButton">Confirm</button>   
            </p>
        </form>

  </div>
</template>



<script>

import { getAuth, updateProfile  } from "firebase/auth";

export default {
    data() {
        return {
            displayName: "",
        };
    },

    computed: {
        email: function() {
            return getAuth().currentUser.email
        },
        uid: function() {
            return getAuth().currentUser.uid
        },
        metadata: function() {
            return getAuth().currentUser.metadata
        },
        oldDisplayName: function() {
            return getAuth().currentUser.displayName
        },
    },

    methods: {

        // Update user info
        updateUser() {
            const auth = getAuth()

            updateProfile(auth.currentUser, {
                displayName: this.displayName // Update Display Name
            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
            });

            this.$router.replace("/")
        }
    }

}
</script>

<style>

    #userProfile {
        background: #2c2c2c;
        text-align: left;
        color: 94b2cf;
        font-family: "Lucida Console";
        text-indent: 80px;
        

        /* Box design */
        border: 1.5px solid transparent;
        border-radius: 25px; /* Rounded edge */
        padding: 30px;
        margin: 20px;
    }
    #userProfileTitle {
        text-align: center;
        text-indent: 0px;
    }


    /* Input button design */
    #confirmButton {
        font-family: "Lucida Console";
        background-color: #2c2c2c; 
        border: none;
        color: white;
        padding: 1px 15px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
    }
    #confirmButton:hover {
    background-color: #414141;
    }

    /* Designs of input area */
    #displayName {
        color: white;
        background-color: #414141;
        font-family: "Lucida Console";
    }
    #displayName::placeholder  {
        color: rgb(161, 161, 161);
    }

</style>