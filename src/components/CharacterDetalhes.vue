<template>
  <div class="quadro">
    <img :src="image" alt="">
    <label for="">Name</label>
    <input disabled type="text" id="name" :value="name">
    <label for="">Status</label>
    <input disabled type="text" id="status" :value="status">
    <label for="">Specie</label>
    <input disabled type="text" id="species" :value="species">
    <label for="">Gender</label>
    <input disabled type="text" id="gender" :value="gender">
    <label class="" for="">Origin</label>
    <input disabled type="text" id="origin" :value="origin.name">
  </div>
</template>
<script>
import axios from 'axios'

export default {
  props: ['id'],
  components: {

  },
  data() {
    return {
      name: '',
      status: '',
      species: '',
      gender: '',
      origin: '',
      image: '',
    }
  },
  methods: {
    getCharacter() {
      axios
        .get(
          `https://rickandmortyapi.com/api/character/${this.id}`
        )
        .then((res) => {

          this.name = res.data.name
          this.status = res.data.status
          this.species = res.data.species
          this.gender = res.data.gender
          this.origin = res.data.origin
          this.image = res.data.image
        })
        .catch((err) => {
          console.log(err);
        });
    }

  },
  mounted() {
    this.getCharacter()
  },

}
</script>

<style scoped>
img {
  
  height: 150px;

}

.quadro {

  width: 300px;
  background-color: red;
}

</style>