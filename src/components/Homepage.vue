<template>
  <div class="container">
  
   
      
  <h1>{{ msg1 }}</h1>
   <p>
   <h2>{{ msg2 }}</h2>
  </div>



  
</template>

<script>
export default {
  name: 'Homepage',
  props: {
    msg1: String,
    msg2: String, 
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}



</style>
