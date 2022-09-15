<template>
    <span>
        <p class="username">currently: {{firstName + " " + lastName}}</p>
         <button class="logout" @click="handleLogout">Logout</button>
    </span>
    <nav class="calendar-nav">
        <button @click="handleClickGetPresents">Get Presents!</button>
        <button @click="handleClickHome">Home</button>
        <button @click="handleClickProfile">My Profile</button>
    </nav>
   
</template>
<script>
import axios from 'axios';
    export default {
        data() {
            return {
                firstName: "",
                lastName: "",
            }
        },
        beforeMount() {
            axios.get(`https://be-present.fly.dev/users/${this.$route.params.userId}`)
                .then(({ data }) => {
                this.firstName = data.user.first_name;
                this.lastName = data.user.last_name;
            });
        },
        methods: {
                handleClickProfile() {
                    this.$router.push({ name: `user-profile`, params: { userId: this.$route.params.userId } });
                },
                handleClickHome() {
                    this.$router.push({ name: `calendar`, params: { userId: this.$route.params.userId } });
                },
                handleClickGetPresents() {
                    this.$router.push({ name: `presents`, params: { userId: this.$route.params.userId } });
                },
                handleLogout() {
                    this.$router.push('/');
                }
            },
    }
</script>

<style>
    .calendar-nav {
        display: flex;
    }
    .username {
        font-size: 14pt;
    }
    h5 {
        font-display: 8pt;
    }
</style>