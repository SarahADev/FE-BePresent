<template>
    <section>
        <h2>This Month:</h2>
        <h3>{{currentMonth}}</h3>
        <div>
            <ul v-for="(friend, index) in monthBirthdays" :key="index" class="curr-month-list">
            <li class="listed-friend">
                {{friend.birthday}} | {{friend.name}} 
                <!-- <button @click="getGifting(friend.interests)" class="gifts-button"> Get Recommendations</button> -->
            </li>
        </ul>
        </div>
    </section>  
</template>

<script>
import axios from 'axios'

    let d
    d = new Date();



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
                        
                        let monthName = new  Date().toLocaleString('default', {month: "long"})
                        this.currentMonth = monthName
                        
                        switch(monthName) {
                            case 'January' : if(monthNum === '01') {this.monthBirthdays.push({name: `${firstName} ${lastName}`, birthday: dayNum, preferences: interests});}
                                break;
                            case 'February' : if(monthNum === '02') {this.monthBirthdays.push({name: `${firstName} ${lastName}`, birthday: dayNum, preferences: interests});}
                                break;
                            case 'March' : if(monthNum === '03') {this.monthBirthdays.push({name: `${firstName} ${lastName}`, birthday: dayNum, preferences: interests});}
                                break;
                            case 'April' : if(monthNum === '04') {this.monthBirthdays.push({name: `${firstName} ${lastName}`, birthday: dayNum, preferences: interests});}
                                break;
                            case 'May' : if(monthNum === '05') {this.monthBirthdays.push({name: `${firstName} ${lastName}`, birthday: dayNum, preferences: interests});}
                                break;
                            case 'June' : if(monthNum === '06') {this.monthBirthdays.push({name: `${firstName} ${lastName}`, birthday: dayNum, preferences: interests});}
                                break;
                            case 'July' : if(monthNum === '07') {this.monthBirthdays.push({name: `${firstName} ${lastName}`, birthday: dayNum, preferences: interests});}
                                break;
                            case 'August' : if(monthNum === '08') {this.monthBirthdays.push({name: `${firstName} ${lastName}`, birthday: dayNum, preferences: interests});}
                                break;
                            case 'September' : if(monthNum === '09') {this.monthBirthdays.push({name: `${firstName} ${lastName}`, birthday: dayNum, preferences: interests});}
                                break;
                            case 'October' : if(monthNum === '10'){this.monthBirthdays.push({name: `${firstName} ${lastName}`, birthday: dayNum, preferences: interests});}
                                break;
                            case 'November' : if(monthNum === '11'){this.monthBirthdays.push({name: `${firstName} ${lastName}`, birthday: dayNum, preferences: interests});}
                                break;
                            case 'December' : if(monthNum === '12'){this.monthBirthdays.push({name: `${firstName} ${lastName}`, birthday: dayNum, preferences: interests});}
                                break;
                            
                        }
                    })
                })
            })
        },
       
    }
</script>