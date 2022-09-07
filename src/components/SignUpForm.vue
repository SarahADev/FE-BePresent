<template>
    <form @submit="handleSubmit">
        <h2>Create Account</h2>

        <label for="">First Name</label>
        <input type="name" required v-model="firstName">

        <label for="">Last Name</label>
        <input type="name" required v-model="lastName">

        <label for="">Email:</label>
        <input type="email" required v-model="email">

        <label>Password:</label>
        <input type="password" required v-model="password">
        <div v-if="passwordError" class="error">{{ passwordError }}</div>

        <label for="">Date of Birth:</label>
        <div class="dob">
        <input type="text" v-model="day">
        <p>/</p>
        <input type="text" v-model="month">
        <p>/</p>
        <input type="text" v-model="year">
        <!-- <div v-if="yearError" class="error">{{ yearError }}</div> -->
    
        <!-- <input type="date" required v-model="dob"> -->
        </div>
        <p class="date-eg">format: day/month/year</p>
        <p class="date-eg">example: 1/1/1990</p>

        <label>Interests:</label>
        <div class="interest-list" required>
            <ul>
                <input type="checkbox" value="art-and-collectibles" v-model="interests">
                <label>Art & Collectibles</label>
                <input type="checkbox" value="jewelry-and-accessories" v-model="interests">
                <label>Jewelry & Accessories</label>
                <input type="checkbox" value="home-and-living" v-model="interests">
                <label>Home & Living</label>
                <input type="checkbox" value="clothing-and-shoes" v-model="interests">
                <label>Clothing & Shoes</label>
                <input type="checkbox" value="Cooking" v-model="interests">
                <label>Cooking</label>
                <input type="checkbox" value="toys-and-entertainment" v-model="interests">
                <label>Toys & Entertainment</label>
            </ul>
            <!-- 'jewelry-and-accessories', 'clothing-and-shoes', 'home-and-living', 'wedding-and-party', 'toys-and-entertainment', 'art-and-collectibles' -->
            
        </div>

        <br>

        <div class="terms">
            <input type="checkbox" v-model="terms" required>
            <label>Accept Terms and Conditions</label>
        </div>

        <div class="terms">
            <input type="checkbox" v-model="reminders">
            <label>Recieve email reminders for your upcoming events</label>
        </div>

        <button class="submit" @click="addUser()">Create Account</button>
    
        
    </form>
    <p>first name: {{ firstName }}</p>
    <p>last name: {{ lastName }}</p>
    <p>Email: {{ email }}</p>
    <p>Password: {{ password }}</p>
    <!-- <p>PasswordError: {{passwordError}}</p>
    <p>yearError: {{yearError}}</p> -->
    <p>Date of Birth: {{day}} / {{month}} / {{year}}</p>
    <p>Terms Accepted: {{terms}}</p>
    <p>Preferences: {{interests}}</p>
</template>

<script>
import axios from 'axios' 
    export default {
        data() {
            return {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                day: '',
                month: '',
                year: '',
                reminders: true,
                terms: false,
                interests:[],
                passwordError: '',
                // yearError: ''
            }
        },
        methods: {
            handleSubmit() {
      this.passwordError = this.password.length > 5 ? 
      '' : 'Password must be at least 6 characters long'
    //   this.yearError = this.year.length = 4 ? 
    //   '' : console.log('Year must be at least 4 numbers long')
            
            },
            async addUser() {
                let result = await axios.post("https://be-present.fly.dev/users", {
                    first_name:this.firstName,
                    last_name:this.lastName,
                    email:this.email,
                    birth_day:this.day,
                    birth_month:this.month,
                    birth_year:this.year,
                    password:this.password,
                    interests:this.interests

                })
                console.log(result, this.firstName, this.month, this.lastName);
                
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
    .error {
        color:red;
        font-size: 0.6em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;

    }
    .dob {
        display: flex;
        align-content: center;


    }
    .date-eg {
        
        color: rgb(184, 184, 184);
        font-size: 0.6em;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-weight: bold;
    }

</style>
