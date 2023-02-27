<template>
        <p class="title">{{ title }} {{ episode }}</p>
</template>
<script>
export default {
  props: ['title', 'episode'],
  data() {
    return {

    }
  }
}
</script>
<style>
.title {
  text-align: center;
  font-size: 25px;
  border: 1px solid #777777;
  border-radius: 50px;
  margin-bottom: 2px;
  border-style: double;
  background-color: #777777;
  font-style: oblique;
  height: 30px;
  padding: 0 0 0 0;
  margin-top: 0px;
}

</style>