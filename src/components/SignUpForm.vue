<template>
    <form @submit="handleSubmit">
        <h2>Create Account</h2>
        <label for="">Email:</label>
        <input type="email" required v-model="email">

        <label>Password:</label>
    <input type="password" required v-model="password" />
    <div v-if="passwordError" class="error">{{ passwordError }} </div>

        <label for="">Date of Birth:</label>
        <input type="date" required v-model="dob">

        <!-- <label>Role:</label>
        <select v-model="role">
            <option value="developer">Web Developer</option>
            <option value="designer">Web Designer</option>
        </select> -->

        <Label>Interests:</Label>
        <div>
            <input type="checkbox" value="Art" v-model="interests">
            <label>Art & Design</label>
            <input type="checkbox" value="Jewellery" v-model="interests">
            <label>Jewellery</label>
            <input type="checkbox" value="Homeware" v-model="interests">
            <label>Homeware</label>
            <input type="checkbox" value="Clothing" v-model="interests">
            <label>Clothing</label>
            <input type="checkbox" value="Cooking" v-model="interests">
            <label>Cooking</label>
            <input type="checkbox" value="Entertainment" v-model="interests">
            <label>Entertainment</label>
            <input type="checkbox" value="DIY Crafts" v-model="interests">
            <label>DIY Crafts</label>
            <input type="checkbox" value="Movies" v-model="interests">
            <label>Movies</label>
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

        <button class="submit" @click="handleClick">Create Account</button>
    
        
    </form>
    <p>Email: {{ email }}</p>
    <p>Password: {{ password }}</p>
    <p>Date of Birth: {{dob}}</p>
    <p>Terms Accepted: {{terms}}</p>
    <p>Preferences: {{interests}}</p>
</template>

<script>
    export default {
        data() {
            return {
                email: '',
                password: '',
                dob: '',
                role: 'developer',
                reminders: true,
                terms: false,
                interests:[],
                passwordError: ''
            }
        },
        methods: {
           handleSubmit() {
      this.passwordError = this.password.length > 5 ? 
      '' : 'Password must be at least 6 chars long'
    },
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

</style>
