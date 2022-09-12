<template>
  <div>
    <h4>Find a friend!</h4>
    <form @submit="handleSubmit">
      <label for="">Email:</label>
        <input type="email" required v-model="email">
        <button @click="handleSubmit">Search</button>
    </form>
  </div>
  <p>{{email}}</p>
</template>

<script>
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
            `https://be-present.fly.dev/users/${this.$route.params.userId}/connections`, 
            {
              connections: this.email
            }
            ).then((res) => {
  
              console.log(res)
            }).catch((error) => {
              console.log(error)
            })
          },
          handleSubmit(){
            this.addFriend()
          }
        }
      }
</script>