<template>

<!--   <h1>BePresent</h1>
 <router-link to="/">Home</router-link> 
 <ProfileList /> -->

  <nav>
  <router-link to="/">Home</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/signup">Sign Up</router-link> |
    <router-link to="/profile">Add friend</router-link> |
    <router-link to="/user_profile">My profile</router-link> 
  </nav>

  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
