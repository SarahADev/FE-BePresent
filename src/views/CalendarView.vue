<template>
<Header/>
        <div class="calendar">
            <router-view name="calendar"></router-view>
        </div>
        <Navbar/>
        <CalendarProfiles/>
        <Calendar/>
        <Footer/>
</template>

<script>
import Calendar from '@/components/Calendar.vue';
import CalendarProfiles from '@/components/CalendarProfiles.vue';
import Header from '@/components/Header.vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
    export default {
    data() {
        return {};
    },
    components: { Calendar, CalendarProfiles, Header, Navbar, Footer }
};
</script>

<style>
    .calendar-nav{
        display: inline-block;

    }
</style>
