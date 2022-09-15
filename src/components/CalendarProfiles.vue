<template>
    <section class="upcoming-bd">
        <div class="upcoming-bd-text">
            <div class="month-current">
            <h5 >Upcoming Birthdays in...</h5>
            <h5 class="curr-month">{{currentMonth}}</h5>
            </div>
            <ul v-for="(friend, index) in monthBirthdays" :key="index" class="curr-month-list">
            
                <button class="birthday-button" @click="handleClick(friend.friendId)">
                {{friend.birthday}} | {{friend.name}}
            </button>
            
        </ul>
        </div>
    </section>  
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return  {
                monthBirthdays: [],
                currentMonth: '',
            }
        },
        beforeMount() {
            axios
            .get(
                `https://be-present.fly.dev/users/${this.$route.params.userId}`
            )
            .then(({data}) => {
                this.friendId = data.user.connections
                this.friendId.map((friend, index) => {
                    axios.get(`https://be-present.fly.dev/users/${friend}`)
                    .then(({data}) => {
                        const monthNum = data.user.birth_month
                        const dayNum = data.user.birth_day
                        const firstName = data.user.first_name
                        const lastName = data.user.last_name
                        const interests = data.user.interests
                        
                        let monthName = new Date().toLocaleString('default', {month: "long"})
                        this.currentMonth = monthName
                        
                        switch(monthName) {
                            case 'January' : if(monthNum === '01') {this.monthBirthdays.push({name: `${firstName} ${lastName}`, birthday: dayNum, preferences: interests}),
                                        this.monthBirthdays.sort((a, b) => a.birthday - b.birthday);}
                                break;
                            case 'February' : if(monthNum === '02') {this.monthBirthdays.push({name: `${firstName} ${lastName}`, birthday: dayNum, preferences: interests}),
                                        this.monthBirthdays.sort((a, b) => a.birthday - b.birthday);}
                                break;
                            case 'March' : if(monthNum === '03') {this.monthBirthdays.push({name: `${firstName} ${lastName}`, birthday: dayNum, preferences: interests}),
                                        this.monthBirthdays.sort((a, b) => a.birthday - b.birthday);}
                                break;
                            case 'April' : if(monthNum === '04') {this.monthBirthdays.push({name: `${firstName} ${lastName}`, birthday: dayNum, preferences: interests}),
                                        this.monthBirthdays.sort((a, b) => a.birthday - b.birthday);}
                                break;
                            case 'May' : if(monthNum === '05') {this.monthBirthdays.push({name: `${firstName} ${lastName}`, birthday: dayNum, preferences: interests}),
                                        this.monthBirthdays.sort((a, b) => a.birthday - b.birthday);}
                                break;
                            case 'June' : if(monthNum === '06') {this.monthBirthdays.push({name: `${firstName} ${lastName}`, birthday: dayNum, preferences: interests}),
                                        this.monthBirthdays.sort((a, b) => a.birthday - b.birthday);}
                                break;
                            case 'July' : if(monthNum === '07') {this.monthBirthdays.push({name: `${firstName} ${lastName}`, birthday: dayNum, preferences: interests}),
                                        this.monthBirthdays.sort((a, b) => a.birthday - b.birthday);}
                                break;
                            case 'August' : if(monthNum === '08') {this.monthBirthdays.push({name: `${firstName} ${lastName}`, birthday: dayNum, preferences: interests}),
                                        this.monthBirthdays.sort((a, b) => a.birthday - b.birthday);}
                                break;
                            case 'September' : if(monthNum === '09') {this.monthBirthdays.push({name: `${firstName} ${lastName}`, birthday: dayNum, preferences: interests}),
                                        this.monthBirthdays.sort((a, b) => a.birthday - b.birthday);}
                                break;
                            case 'October' : if(monthNum === '10'){this.monthBirthdays.push({name: `${firstName} ${lastName}`, birthday: dayNum, preferences: interests}),
                                        this.monthBirthdays.sort((a, b) => a.birthday - b.birthday);}
                                break;
                            case 'November' : if(monthNum === '11'){this.monthBirthdays.push({name: `${firstName} ${lastName}`, birthday: dayNum, preferences: interests}),
                                        this.monthBirthdays.sort((a, b) => a.birthday - b.birthday);}
                                break;
                            case 'December' : if(monthNum === '12'){this.monthBirthdays.push({name: `${firstName} ${lastName}`, birthday: dayNum, preferences: interests}),
                                        this.monthBirthdays.sort((a, b) => a.birthday - b.birthday);}
                                break;
                            
                        }
                    })
                })
            })
        },
       
    }
</script>

<style>
   .upcoming-bd{
    background-color:#f6e0e1;
    text-align: center;
        padding: 20px;
        border-radius: 10px;
        min-height: 30px;
    display: flex;
    justify-content: center;
    align-content: center;
   }
   .upcoming-bd-text{
    width: 100%
   }
   .curr-month {
    text-decoration:underline;
    color:#EF767A;
    font-size: larger;
    margin-top: -15px;
    margin-bottom:1px;
   }
</style>