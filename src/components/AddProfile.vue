<template>
    <form @submit="handleSubmit">
        <h2>Create a Profile</h2>
        <label for="">First Name</label>
        <input type="name" required v-model="firstName">

        <label for="">Last Name</label>
        <input type="name" required v-model="lastName">

        <label for="">Date of Birth:</label>
        <input type="date" required v-model="dob">

        <label>Relation:</label>
        <select v-model="role">
            <option value="family">Family</option>
            <option value="parent">Parent</option>
            <option value="friend">Friend</option>
            <option value="coworker">Coworker</option>
            <option value="partner">Partner</option>
        </select>

        <Label>Interests:</Label>
        
        <div required>
            <input type="checkbox" value="art-and-collectibles" v-model="interests">
            <label>Art & Collectibles</label>
            <input type="checkbox" value="jewelry-and-accessories" v-model="interests">
            <label>Jewelry & Accessories</label>
            <input type="checkbox" value="home-and-living" v-model="interests">
            <label>Home & Living</label>
            <input type="checkbox" value="clothing-and-shoes" v-model="interests">
            <label>Clothing & Shoes</label>
            <input type="checkbox" value="toys-and-entertainment" v-model="interests">                
            <label>Toys & Entertainment</label>
        </div>
        <br>
        <p>We will reccomend you gifts based on their interests</p>

        <br>

        <button class="submit" @click="handleClick">Add</button>
    
        
    </form>
    <p>first name: {{ firstName }}</p>
    <p>last name: {{ lastName }}</p>
    <p>Date of Birth: {{dob}}</p>
    <p>Relation: {{relation}}</p>
    <p>Preferences: {{interests}}</p>
</template>

<script>
    export default {
        data() {
            return {
                firstName: '',
                lastName: '',
                dob: '',
                relation: 'Family',
                reminders: true,
                terms: false,
                interests:[],

            }
        },
        methods: {
            handleSubmit() {
                
                console.log('email: ', this.email)
                console.log('password: ', this.password)
                console.log('date: ', this.dob)
                console.log('relation', this.relation)
                console.log('interests: ', this.interests)
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

</style>
