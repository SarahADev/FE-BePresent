<template>
    <section>
    <h2>Calendar</h2>
<div class="calendar-view">
    <div class="month-card">
        <h3>January</h3>
        <span>01</span>
        <ul v-for="(friend, index) in january" :key="index" class="birthday-list">
            <button @click="handleClick(friend.friendId)">
                {{friend.birthday}} | {{friend.name}}
            </button>
        </ul>
    </div>
    <div class="month-card">
        <h3>February</h3>
        <span>02</span>
        <ul v-for="(friend, index) in february" :key="index" class="birthday-list">
            <button @click="handleClick(friend.friendId)">
                {{friend.birthday}} | {{friend.name}}
            </button>
        </ul>
    </div>
    <div class="month-card">
        <h3>March</h3>
        <span>03</span>
        <ul v-for="(friend, index) in march" :key="index" class="birthday-list">
            <button @click="handleClick(friend.friendId)">
                {{friend.birthday}} | {{friend.name}}
            </button>
        </ul>
    </div>
    <div class="month-card">
        <h3>April</h3>
        <span>04</span>
        <ul v-for="(friend, index) in april" :key="index" class="birthday-list">
            <button @click="handleClick(friend.friendId)">
                {{friend.birthday}} | {{friend.name}}
            </button>
        </ul>
    </div>
    <div class="month-card">
        <h3>May</h3>
        <span>05</span>
        <ul v-for="(friend, index) in may" :key="index" class="birthday-list">
            <button @click="handleClick(friend.friendId)">
                {{friend.birthday}} | {{friend.name}}
            </button>
        </ul>
    </div>
    <div class="month-card">
        <h3>June</h3>
        <span>06</span>
        <ul v-for="(friend, index) in june" :key="index" class="birthday-list">
            <button @click="handleClick(friend.friendId)">
                {{friend.birthday}} | {{friend.name}}
            </button>
        </ul>
    </div>
    <div class="month-card">
        <h3>July</h3>
        <span>07</span>
        <ul v-for="(friend, index) in july" :key="index" class="birthday-list">
            <button @click="handleClick(friend.friendId)">
                {{friend.birthday}} | {{friend.name}}
            </button>
        </ul>
    </div>
    <div class="month-card">
        <h3>August</h3>
        <span>08</span>
        <ul v-for="(friend, index) in august" :key="index" class="birthday-list">
            <button @click="handleClick(friend.friendId)">
                {{friend.birthday}} | {{friend.name}}
            </button>
        </ul>
    </div>
    <div class="month-card">
        <h3>September</h3>
        <span>08</span>
        <ul v-for="(friend, index) in september" :key="index" class="birthday-list">
            <button @click="handleClick(friend.friendId)">
                {{friend.birthday}} | {{friend.name}}
            </button>
        </ul>
    </div>
    <div class="month-card">
        <h3>October</h3>
        <span>08</span>
        <ul v-for="(friend, index) in october" :key="index" class="birthday-list">
            <button @click="handleClick(friend.friendId)">
                {{friend.birthday}} | {{friend.name}}
            </button>
        </ul>
    </div>
    <div class="month-card">
        <h3>November</h3>
        <span>08</span>
        <ul v-for="(friend, index) in november" :key="index" class="birthday-list">
            <button @click="handleClick(friend.friendId)">
                {{friend.birthday}} | {{friend.name}}
            </button>
        </ul>
    </div>
    <div class="month-card">
        <h3>December</h3>
        <span>08</span>
        <ul v-for="(friend, index) in december" :key="index" class="birthday-list">
            <button @click="handleClick(friend.friendId)">
                {{friend.birthday}} | {{friend.name}}
            </button>
        </ul>
    </div>
</div>
</section>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                january: [],
                february: [],
                march: [],
                april: [],
                may: [],
                june: [],
                july: [],
                august: [],
                september: [],
                october: [],
                november: [],
                december: []
            }
            },
        beforeMount() {
            axios
            .get(
                `https://be-present.fly.dev/users/${this.$route.params.userId}`
            )
            .then(({data}) => {
                this.friends = data.user.connections
                this.friends.map((friend) => {
                    axios.get(`https://be-present.fly.dev/users/${friend}`)
                    .then(({data}) => {
                        const friendId = data.user.user_id
                        const monthNum = data.user.birth_month
                        const dayNum = data.user.birth_day
                        const firstName = data.user.first_name
                        const lastName = data.user.last_name
                        switch(monthNum) {
                            case '01' : this.january.push({name: firstName + ' ' + lastName, birthday: dayNum, friendId}),
                                        this.january.sort((a, b) => a.birthday - b.birthday);
                                break;
                            case '02' : this.february.push({name: firstName + ' ' + lastName, birthday: dayNum, friendId}),
                                        this.february.sort((a, b) => a.birthday - b.birthday);
                                break;
                            case '03' : this.march.push({name: firstName + ' ' + lastName, birthday: dayNum, friendId}),
                                        this.march.sort((a, b) => a.birthday - b.birthday);
                                break;
                            case '04' : this.april.push({name: firstName + ' ' + lastName, birthday: dayNum, friendId}),
                                        this.april.sort((a, b) => a.birthday - b.birthday);
                                break;
                            case '05' : this.may.push({name: firstName + ' ' + lastName, birthday: dayNum, friendId}),
                                        this.may.sort((a, b) => a.birthday - b.birthday);
                                break;
                            case '06' : this.june.push({name: firstName + ' ' + lastName, birthday: dayNum, friendId}),
                                        this.june.sort((a, b) => a.birthday - b.birthday);
                                break;
                            case '07' : this.july.push({name: firstName + ' ' + lastName, birthday: dayNum, friendId}),
                                        this.july.sort((a, b) => a.birthday - b.birthday);
                                break;
                            case '08' : this.august.push({name: firstName + ' ' + lastName, birthday: dayNum, friendId}),
                                        this.august.sort((a, b) => a.birthday - b.birthday);
                                break;
                            case '09' : this.september.push({name: firstName + ' ' + lastName, birthday: +dayNum, friendId}),
                                        this.september.sort((a, b) => a.birthday - b.birthday);
                                break;
                            case '10' : this.october.push({name: firstName + ' ' + lastName, birthday: dayNum, friendId}),
                                        this.october.sort((a, b) => a.birthday - b.birthday);
                                break;
                            case '11' : this.november.push({name: firstName + ' ' + lastName, birthday: dayNum, friendId}),
                                        this.november.sort((a, b) => a.birthday - b.birthday);
                                break;
                            case '12' : this.december.push({name: firstName + ' ' + lastName, birthday: dayNum, friendId}),
                                        this.december.sort((a, b) => a.birthday - b.birthday);
                        }
                });
            })
        })
        },
        methods: {
            handleClick (friendId) {
                this.$router.push({ name: "friend-profile", params: { userId: this.$route.params.userId, friendId } });
            },
        },
    };

</script>

<style>
    section{
        margin: 5px;
    }
    .month-card {
        max-width: 420px;
        margin: 20px auto;
        background: #f6f7f8;
        text-align: left;
        padding: 20px;
        border-radius: 10px;
        min-height: 30px
    }
    .birthday-list {
        display: grid;
        text-align: left;
        justify-content: center;    
    }
    span {
        color: #eeeff0;
        font-size: 2em;
        float:right;
        font-weight: bold;
        display:none;
    }
    li {
        color: #ea9010;
        display: inline-block;
        font-size: 0.6em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
        text-align: right;
    }
    h3 {
        color: #EF767A;
        float:left;
        margin:auto
    }
   
</style>