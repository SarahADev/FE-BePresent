<template>   

    <div class="navbar-component">
        <div class="user-login">
        <img class="avatar" src="../../public/user.png" alt="user avatar">
    <h5 class="user-name">{{firstName}} {{lastName}}</h5>
        </div>   
    <!-- <span class="button-nav"> -->
    <nav class="calendar-nav"> 
        <button @click="handleClickProfile">My Profile</button>    
        <button @click="handleClickGetPresents">Get Presents!</button>
        <button @click="handleClickHome">Home</button>
        </nav>
    <!-- </span> -->
    
    </div>

   
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
    .button-nav {
        display: flex;
        justify-content:space-evenly;
        align-content: center;
        
    }
    .calendar-nav {
        margin-top: -80px;
        margin-right: 20px;
        margin-left: -40px;
        width: 100%;
       height: 20px;
    }
    nav {
        display: inline;
    }
    .logout-nav {
        width: 100%;
        
    }
    .avatar {
        width:25px;
        height:25px;
        margin-top:14px;
        margin-right: 5px;
        
    }
    .user-login{
        display: flex;
        align-content: center;
        justify-content: center;
        margin-top: 2em;
        margin-bottom:2em;
    }
    h5.user-name {
        font-size: 8pt;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: lighter;
    }
</style>