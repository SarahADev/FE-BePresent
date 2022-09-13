<template>
<Header/>
    
        <div class="calendar">
            <router-view name="calendar"></router-view>
        </div>
        <nav class="calendar-nav">
            <button @click="handleClickGetPresents">Get Presents!</button>
            <!-- <button @click="handleClickHome">Home</button> -->
            <button @click="handleClickProfile">My Profile</button>
        </nav>
   
       
        <CalendarProfiles/>
        <Calendar/>
        
</template>

<script>
import Calendar from '@/components/Calendar.vue';
import CalendarProfiles from '@/components/CalendarProfiles.vue';
import Header from '@/components/Header.vue';
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
    components: { Calendar, CalendarProfiles, Header }
};
</script>

<style>
    .calendar-nav{
        display: inline-block;

    }
</style>
