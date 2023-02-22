<template>
  <div class="header">
    <div class="container">
      <div class="title">
        <h2>{{ title }} {{ episode }}</h2>
      </div>
    </div>
  </div>
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
  font-size: 37px;
  border: 1px solid #777777;
  border-radius: 50px;
  margin-bottom: 5px;
  border-style: double;
  background-color: #777777;
  font-style: oblique;
}
</style>