<template>
    <div class="row">
      <div class="col-md-12 align-self-center text-center mb-2">
        <img :src="image" alt="">
      </div>
      <div class="col-12">
        <div class="form-group row">
          <label class="col-sm-2" for="">Name</label>
          <div class="col-sm-10">
            <input disabled type="text" class="form-control" id="name" :value="name">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2" for="">Status</label>
          <div class="col-sm-10">
            <input disabled type="text" class="form-control" id="status" :value="status">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2" for="">Specie</label>
          <div class="col-sm-10">
            <input disabled type="text" class="form-control" id="species" :value="species" >
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2" for="">Gender</label>
          <div class="col-sm-10">
            <input disabled type="text" class="form-control" id="gender" :value="gender">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2" for="">Origin</label>
          <div class="col-sm-10">
            <input disabled type="text" class="form-control" id="origin" :value="origin.name">
          </div>
        </div>
      </div>
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

<style></style>