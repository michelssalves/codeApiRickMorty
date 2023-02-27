<template>
  <div class="quadro">
    <div class="imagem">
      <img :src="image" alt="">
    </div>
    <ul class="informacoes">
      <label for="">Name</label>
      <li>
        <input disabled type="text" id="name" :value="name">
      </li>
      <label for="">Status</label>
      <li>
        <input disabled type="text" id="status" :value="status">
      </li>
      <label for="">Specie</label>
      <li>
        <input disabled type="text" id="species" :value="species">
      </li>
      <label for="">Gender</label>
      <li>
        <input disabled type="text" id="gender" :value="gender">
      </li>
      <label class="" for="">Origin</label>
      <li>
        <input disabled type="text" id="origin" :value="origin.name">
      </li>
    </ul>
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
  height: 360px;
  background-color: #8d9e9d;
  border-radius: 60px;

}
img{
  margin-top: 10px;
  border-radius: 60px;
}
.quadro .imagem {

  margin-inline: 70px;
 

}

.quadro .informacoes {

  list-style: none;
  font-weight: 600;
  margin-inline: 20px;

}
</style>