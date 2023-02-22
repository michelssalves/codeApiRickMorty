<template>
  <div class="usuario-lista">
    <table class="tabela-custom">
      <thead>
        <tr class="row-table">
          <th class="fields-table">Name</th>
          <th class="fields-table">Type</th>
          <th class="fields-table">Dimension</th>
          <th class="fields-table">Residents</th>
        </tr>
      </thead>
      <tbody>
        <tr class="row-table">
          <td class="fields-table">{{ name }}</td>
          <td class="fields-table">{{ type }}</td>
          <td class="fields-table">{{ dimension }}</td>
          <td class="fields-table">{{ residents }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  props: ['name'],
  data() {
    return {
      episodes: [],
      type: '',
      residents: '',
      created: '',
      dimension: '',
    }
  },
  methods: {
    getLocations() {
      axios
        .get(
          `https://rickandmortyapi.com/api/location?name=${this.name}`
        )
        .then((res) => {
          this.type = res.data.results[0]['type']
          this.created = res.data.results[0]['created']
          this.dimension = res.data.results[0]['dimension']
          this.residents = res.data.results[0]['residents'].length
        })
        .catch((err) => {
          console.log(err);
        });
    }

  },
  mounted() {
    this.getLocations()
  },

}
</script>
<style>
.size-img {
  width: 75px;
  height: 75px;
}
</style>