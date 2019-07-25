<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/hackathon.jpeg">
    <Homepage msg1="Welcome to Hackalearn"/>
    <Homepage msg2= "Learn today, code tomorrow"/>
    <img src="htmlpic.jpeg" alt="Italian Trulli">
  </div>

</template>

<script>
// @ is an alias to /src
import Homepage from '@/components/Homepage.vue'

export default {
  name: 'home',
  components: {
    Homepage
  }
}
</script>
