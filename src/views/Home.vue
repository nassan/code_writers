<script>
import Homepage from '../components/Homepage.vue';
// @ is an alias to /src


export default {
  name: "container",
  components: {
    Homepage
  }
};
</script>
<template>
  <div>
   

    <div class="column">
      
       <div>
        <a href="http://localhost:8080/HtmlLanguage">
   <img  src="../assets/htmlpic.jpeg" alt="Italian Trulli" border="10" >
  </a>
      </div>
     
      <div>
        <br>
        <br>
        <br>
         <a href="http://localhost:8080/Clang">
   <img   style="background-color:white;" src="../assets/c-logo.png" alt="Italian Trulli" border="10" width="390" height="290">
  </a>
      </div> 
    </div>
    <div class="column">

      <img alt="Vue logo" src="../assets/hackathon.jpeg" border="10"> 
      
    <Homepage msg1="Welcome to Hackalearn"
    msg2= "Learn today, code tomorrow"
    msg3= "Click on the picture to start learning!"/>
    </div>
    <div class="column">
  
     <div>
       <a href="http://localhost:8080/Java">
   <img  src="../assets/Javapic.jpg" alt="Italian Trulli" border="10"  width="500">
  </a>
      </div>
      <div>
        <br>
        <br>
        <br>
       <a href="http://localhost:8080">
   <img  src="../assets/python.jpeg" alt="Italian Trulli" border="10"  >
  </a>
      </div> 
    </div>
    
  </div>
</template>



<style>

.column {
  display: inline-block;
  width: 33.33%;
  color: white; 
}
 body {
  background-image: url(../assets/background4.jpg);
}  


</style>

