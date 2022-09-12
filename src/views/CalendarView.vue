<template>
        <div class="calendar">
            <router-view name="calendar"></router-view>
        </div>
        <h1>Calendar Page</h1>
        <nav>
            <button @click="handleClick">My Profile</button>
        </nav>
        <p>userId: {{this.$route.params.userId}}</p>
</template>

<script>
    export default {
        props: ['userId'],
        created() {
            console.log(this.$route.params.userId);
        },  
        data() {
            return {
                // userId: "banana"
            };
        },
        methods: {
            async handleClick () {
                await this.$router.push({name: `user-profile`, params: {userId: this.$route.params.userId}})
            }
        },
};
</script>
