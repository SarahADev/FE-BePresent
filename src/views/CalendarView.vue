<template>
        <div class="calendar">
            <router-view name="calendar"></router-view>
        </div>
        <nav>
            <button @click="handleClickGetPresents">Get Presents!</button>
            <button @click="handleClickHome">Home</button>
            <button @click="handleClickProfile">My Profile</button>
        </nav>
        <h1>Calendar Page</h1>
        <CalendarProfiles/>
        <Calendar/>
        
</template>

<script>
import Calendar from '@/components/Calendar.vue';
import CalendarProfiles from '@/components/CalendarProfiles.vue';
    export default {
    data() {
        return {};
    },
    methods: {
        async handleClickProfile() {
            await this.$router.push({ name: `user-profile`, params: { userId: this.$route.params.userId } });
        },
        async handleClickHome() {
            await this.$router.push({ name: `calendar`, params: { userId: this.$route.params.userId } });
        }
    },
    components: { Calendar, CalendarProfiles }
};
</script>
