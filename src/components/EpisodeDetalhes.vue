<template>
  <div class="usuario-lista">
    <table class="tabela-custom">
      <thead>
        <tr class="row-table">
          <th class="fields-table">Id</th>
          <th class="fields-table">Name</th>
          <th class="fields-table">Air Date</th>
          <th class="fields-table">Episode</th>
        </tr>
      </thead>
      <tbody>
        <tr class="row-table">
          <td class="fields-table">{{ id }}</td>
          <td class="fields-table">{{ name }}</td>
          <td class="fields-table">{{ airDate }}</td>
          <td class="fields-table">{{ episode }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  props: ['id'],
  data() {
    return {
      episodes: [],
      name: '',
      airDate: '',
      episode: '',
      characters: [],
    }
  },
  methods: {
    irParaEpisodio(id) {

      this.$router.push(`/location/${id}`)
    },
    getLocation() {
      axios
        .get(
          `https://rickandmortyapi.com/api/episode/${this.id}`
        )
        .then((res) => {
          console.log(res)
          this.name = res.data.name
          this.airDate = res.data.air_date
          this.episode = res.data.episode
          this.characters = res.data.characters
        })
        .catch((err) => {
          console.log(err);
        });
    }


  },
  mounted() {
    this.getLocation()
  },

}
</script>
<style>
.size-img {
  width: 75px;
  height: 75px;
}
</style>