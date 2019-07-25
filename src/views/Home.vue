<template>
  <div>
   

    <div class="column">
      
       <div>
        
      </div>
      <a href="https://www.html.com">
   <img  src="../assets/htmlpic.jpeg" alt="Italian Trulli" border="15">
  </a>
      <div>
        hi
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


