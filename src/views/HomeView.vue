<template>
  <div class="home">
    <img alt="gift photo" src="../assets/gift.jpg">
   <!--  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
/* // @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue' */

export default {
  name: 'HomeView',
  /* components: {
    HelloWorld
  } */
}
</script>

<style>

img {
  background-image: url(https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-1.2.1&dl=ekaterina-shevchenko-ZLTlHeKbh04-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb
);
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

</style>