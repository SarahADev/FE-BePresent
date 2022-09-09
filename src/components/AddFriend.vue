<!-- PATCH /users/:userId/connections
https://be-present.fly.dev/users/:userId/connections
Replace the parametric endpoint with the users ‘user_id’.
   const input = {
     email: "test@test.com",
   }; -->

<template>
  <div>
    <h2>Friends</h2>
    <form @submit="handleSubmit">
      <label for="">Email:</label>
        <input type="email" required v-model="email">
        <button @click="handleSubmit">Search</button>
    </form>
  </div>
  <p>{{email}}</p>
</template>

<script>
  let userid = 'd4ee78cb-854f-4034-8d7d-b020106bc968'

  import axios from "axios"

    export default {
        data(){
            return {
                email: "",
               }
        },

        methods: {
          addFriend() {
           axios.patch(
            `https://be-present.fly.dev/users/${userid}/connections`, 
            {
              connections: this.email
            }
            ).then((res) => {
  
              console.log(res)
            }).catch((error) => {
              // console.log(this.email)
              console.log(error)
            })
          },
          handleSubmit(){
            this.addFriend()
          }
        }
      }
</script>