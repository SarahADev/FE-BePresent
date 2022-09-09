<template>
    <form @submit="handleSubmit">
        <h2>Create a Profile</h2>

        <label for="">Name</label>
        <input type="name" required v-model="name">

        <label for="">Date of Birth:</label>
        <div class="dob">
        <input type="text" v-model="day">
        <div v-if="dayError" class="error">{{ dayError }}</div>
        <p class="slash">/</p>
        <input type="text" v-model="month">
        <div v-if="monthError" class="error">{{ monthError }}</div>
        <p class="slash">/</p>
        <input type="text" v-model="year">
        </div>

        <label>Relation:</label>
        <select v-model="role">
            <option value="family">Family</option>
            <option value="parent">Parent</option>
            <option value="friend">Friend</option>
            <option value="coworker">Coworker</option>
            <option value="partner">Partner</option>
        </select>

        <Label>Interests:</Label>
        <ul>
            <input class="interests" type="checkbox" value="art-and-collectibles" v-model="interests">
            <label>Art & Collectibles</label>
            <input class="interests" type="checkbox" value="jewelry-and-accessories" v-model="interests">
            <label>Jewelry & Accessories</label>
            <input class="interests" type="checkbox" value="home-and-living" v-model="interests">
            <label>Home & Living</label>
            <input class="interests" type="checkbox" value="clothing-and-shoes" v-model="interests">
            <label>Clothing & Shoes</label>
            <input class="interests" type="checkbox" value="toys-and-entertainment" v-model="interests">                
            <label>Toys & Entertainment</label>
        </ul>
        <br>
        <p>We will reccomend you gifts based on their interests</p>

        <br>

        <button class="submit" @click="handleSubmit()">Add</button>
    
        
    </form>
    <p>name: {{ name }}</p>
    <p>Date of Birth: {{dob}}</p>
    <p>Relation: {{relation}}</p>
    <p>Preferences: {{interests}}</p>
</template>

<script>
    let userId = "d4ee78cb-854f-4034-8d7d-b020106bc968"
    import axios from "axios"
    export default {
        data() {
            return {
                name: '',
                day: '',
                month: '',
                year: '',
                relation: 'Family',
                interests:[],
                dayError: ''
            }
        },
        methods: {

            handleSubmit(){
                this.dayError = this.day.length === 2 ?
                '' : 'Day and Month must be 2 characters long'
                this.monthError = this.month.length === 2 ?
                '' : 'Day and Month must be 2 characters long'
                
            },
            
            async addProfile(){
                await axios.patch(`https://be-present.fly.dev/users/${userId}/profiles`, 
                {
                    name: this.name,
                    birth_day: this.day,
                    birth_month: this.month,
                    birth_year: this.year,
                    interests: this.interests
                })
                .catch((error) => {
                    console.log(error)
                })
            }
        }
    }
</script>

<style>
    form {
        max-width: 420px;
        margin: 30px auto;
        background: #F6F7F8;
        text-align: left;
        padding: 40px;
        border-radius: 10px;
    }
    label {
        color: #ea9010;
        display: inline-block;
        margin: 25px 0 15px;
        font-size: 0.6em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }
    input, select{
        display:block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #ef767a;
        color: #555
    }
    input[type="checkbox"] {
        display:inline-block;
        width: 16px;
        margin: 0 10px 0 0;
        position: relative;
        top: 2px;
    }
    label.terms {
        color:#555;
    }
    button {
        background: #4e937a;
        border: 0;
        padding: 10px 20px;
        margin-top: 20px;
        color: white;
        border-radius: 20px;
    }
    .submit {
        text-align: center;
    }
    p{
        font-size: 0.8em;
        text-transform: uppercase;
        color: #4e937a;
    }
    .slash {
        margin:8px
    }
    ul {
        align-items:center;
        border: 1px solid transparent;
        cursor: pointer;
        display:inline-block;
        padding: 0.5rem;
        user-select: none;
        justify-content: left;
    }
    .error {
        color:red;
        font-size: 0.6em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }
</style>
