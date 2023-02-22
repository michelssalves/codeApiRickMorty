<template>
  <div>
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
      title: 'Locations',
    }
  },

}
</script>
