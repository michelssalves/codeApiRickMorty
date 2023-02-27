<template>
  <nav class="menu">
    <ul>
      <router-link to="/character" tag="li" active-class="active"><a>Characters</a></router-link>
      <router-link to="/episodes" tag="li" active-class="active"><a>Episodes</a></router-link>
      <router-link to="/locations" tag="li" active-class="active"><a>Locations</a></router-link>
    </ul>
  </nav>
</template>
<script>
export default {

}
</script>
<style>
.menu ul {

  display: flex;
  background-color: #777;
  list-style: none;
  padding: 0;
  border-radius: 50px;
  overflow: hidden;
}

.menu a {
  display: flex;
  justify-content: center;
  padding: 10px 25px;
  text-decoration: none;
  font-weight: 600;

}

.menu .active {
  background-color: #1D9790;
}

.menu .active a {
  color: #FFF;
}

.menu a {
  color: #FFF;
}
</style>