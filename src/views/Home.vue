<template>
  <div>
   

    <div class="column">
      
       <div>
        <a href="https://www.html.com">
   <img  src="../assets/htmlpic.jpeg" alt="Italian Trulli" border="15" >
  </a>
      </div>
     
      <div>
        <br>
        <br>
         <a href="http://localhost:8080/Clang">
   <img  src="../assets/c-logo.png" alt="Italian Trulli" border="15" width="250" height="250">
  </a>
      </div> 
    </div>
    <div class="column">

      <img alt="Vue logo" src="../assets/hackathon.jpeg" border="15"> 
    <Homepage msg1="Welcome to Hackalearn"
    msg2= "Learn today, code tomorrow"/>
    </div>
    <div class="column">
  
     <div>
        hi
      </div>
      <div>
        hi
      </div> 
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Homepage from "@/components/Homepage.vue";

export default {
  name: "container",
  components: {
    Homepage
  }
};
</script>

<style>

.column {
  display: inline-block;
  width: 33.33%;
  
}



</style>


