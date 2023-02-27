<template>
  <div id="app">  
    <Menu/>
    <router-view/>
  </div>
</template>
<script>
import Menu from './components/MenuComp'

export default{

  components: { Menu },
}

</script>
<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0px;
  padding: 0px 0px 0px 0px;
}
</style>
