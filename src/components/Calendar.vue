<template>
    <h2>Calendar</h2>
<div>
    <div class="month-card">
        <h3>January</h3>
        <span>01</span>
        <!-- <h4>01</h4> -->
        <ul class="birthday-list">
            <li>
                09 | Jasmin Bannister
            </li>
            <li>
                24 | Sarah Taylor
            </li>
        </ul>
    </div>
    <div class="month-card">
        <h3>February</h3>
        <span>02</span>
        <ul class="birthday-list">
            <li>
                28 | Colby Chan
            </li>
        </ul>
    </div>
    <div class="month-card">
        <h3>March</h3>
        <span>03</span>
        <ul class="birthday-list">
            <li>
                02 | Zahraa Karim
            </li>
            <li>
                11 | Richard Meat
            </li>
        </ul>
    </div>
    <div class="month-card">
        <h3>April</h3>
        <span>04</span>
        <ul class="birthday-list">
            <li>
                02 | Zahraa Karim
            </li>
            <li>
                11 | Richard Meat
            </li>
        </ul>
    </div>
    <div class="month-card">
        <h3>May</h3>
        <span>05</span>
        <ul class="birthday-list">
            <li>
                02 | Zahraa Karim
            </li>
            <li>
                11 | Richard Meat
            </li>
        </ul>
    </div>
    <div class="month-card">
        <h3>June</h3>
        <span>06</span>
        <ul class="birthday-list">
            <li>
                05 | Zayn Karim
            </li>
        </ul>
    </div>
    <div class="month-card">
        <h3>July</h3>
        <span>07</span>
        <ul class="birthday-list">
            <li>
                
            </li>
        </ul>
    </div>
    <div class="month-card">
        <h3>August</h3>
        <span>08</span>
        <ul class="birthday-list">
            <li>
                28 | Denise Marquez
            </li>
        </ul>
    </div>
    

  
    <h3>June</h3>
    <h3>July</h3>
    <h3>August</h3>
    <h3>September</h3>
    <h3>October</h3>
    <h3>November</h3>
    <h3>December</h3>
</div>
   
</template>

<script>
    export default {
        data() {

        }
    }
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
    }
    .birthday-list {
        display: grid;
        text-align: left;
        justify-content: center;
        /* float:left; */
    
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
        text-align:start;
        
    }
    h3 {
        color: #EF767A;
        float:left;
        margin:auto
        
        /* margin-right: 1em; */
    }
   
</style>