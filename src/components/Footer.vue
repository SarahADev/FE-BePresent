<template>
     <div class="logout-nav">
        <button class="logout" @click="handleLogout">Logout</button>
        
    </div>
</template>

<script>

    export default {
        methods: {
            handleLogout () {
                this.$router.push('/')
            },
        },
    }
</script>