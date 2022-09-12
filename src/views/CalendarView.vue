<template>
        <div class="calendar">
            <router-view name="calendar"></router-view>
        </div>
        <h1>Calendar Page</h1>
        <nav>
            <button @click="handleClick">My Profile</button>
        </nav>
</template>

<script>
    export default {
        data() {
            return {
                
            };
        },
        methods: {
            async handleClick () {
                await this.$router.push({name: `user-profile`, params: {userId: this.$route.params.userId}})
            }
        },
};
</script>
