<template>
    <h5>Logged in as: {{firstName + " " + lastName}}</h5>
    <div class="logout-nav">
        <button class="logout" @click="handleLogout">Logout</button>
    </div>
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
        justify-content: space-between;
    }
    .logout-nav {
        display: flex;
        justify-content: center;
    }
</style>