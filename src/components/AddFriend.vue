<template>
  <div>
    <h4>Find a friend!</h4>
    <form @submit="handleSubmit">
      <label for="">Email:</label>
      <input type="email" required v-model="email" />
      <button>Search</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
    };
  },

  methods: {
    addFriend() {
      axios
        .patch(
          `https://be-present.fly.dev/users/${this.$route.params.userId}/connections`,
          {
            connections: this.email,
          }
        )
        .then((res) => {
          console.log(res.user);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    handleSubmit() {
      this.addFriend();
    },
  },
};
</script>

<style scoped>
form {
  padding: 0;
  margin: 0;
}

h4 {
  margin: 0;
}
</style>
