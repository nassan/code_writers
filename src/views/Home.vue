<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/htmlfordummies.jpg">
    <HtmlLanguage msg="Welcome to html guide"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HtmlLanguage from '@/components/HtmlLanguage.vue'

export default {
  name: 'home',
  components: {
    HtmlLanguage
  }
}
</script>

>