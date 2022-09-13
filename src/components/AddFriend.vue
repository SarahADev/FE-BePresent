<template>
  <div>
    <h4>Find a friend!</h4>
    <form @submit="handleSubmit">
      <label for="">Email:</label>
        <input type="email" required v-model="email">
        <p v-if="err">Already a friend!</p>
        <button>Search</button>
    </form>
  </div>
</template>

<script>
  import axios from "axios"

    export default {
        data(){
            return {
                email: "",
                err: false
               }
        },

        methods: {
          addFriend() {
           axios.patch(
            `https://be-present.fly.dev/users/${this.$route.params.userId}/connections`, 
            {
              connections: this.email
            }
            ).then(() => {
              this.$router.go();
            }).catch((error) => {
              this.err = true;
            })
          },
          handleSubmit(){
            this.addFriend()
          }
        }
      }
</script>