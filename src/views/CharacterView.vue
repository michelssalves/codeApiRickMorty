<template>
  <div class="teste">
    <Header :title="title"></Header>
    <router-view />
  </div>
</template>
<script>
import Header from '../components/HeaderComp';
export default {
  components: {
    Header
  },
  data() {
    return {
      title: 'Characters',

    }
  },
}
</script>
<style></style>
