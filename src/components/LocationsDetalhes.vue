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
<style scoped>
.tabela-custom {

list-style: none;
border: 1px solid #1D9790;
border-radius: 8px;
overflow: hidden;
background-color: #FFF;

}

.tabela-custom .fields-table {

padding: 15px 30px;
cursor: pointer;
border: 1px solid #777777;
}

.tabela-custom .row-table:hover {
background-color: #FFF3;
}

.tabela-custom .fields-table:nth-child(n + 2) {
border-top: 1px solid #777777;

}
</style>