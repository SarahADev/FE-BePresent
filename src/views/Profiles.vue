<template>
    <h2>Your Profiles</h2>
    <label for="">Find A Friend</label>
    <input type="text" v-model="email" placeholder="Search email here...">
    <button @click="handleSubmit">Search</button>
    <br>
    <h3>Friends</h3>
    <br>
    <div>
        example. cards below
        Johnny Bravo
        12/09/1990
    </div>

    <p>{{email}}</p>
</template>

<script>
    import axios from "axios"
    export default {
        data(){
            return {
                email: '',
               }
        },
        methods: {
                
            async getUserByEmail() {
                let result = await axios.get('https://bepresent.fly.dev/users')
            },
            handleSubmit(){

                result.filter((user) => {
                    const friend = user.email === this.email
                })
                
        }
}
    }
</script>
