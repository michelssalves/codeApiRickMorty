<template>
  <div class="usuario-lista">
    <div class="container">
      <table class="tabela-custom">
        <thead>
          <tr class="row-table">
            <th class="fields-table">Id</th>
            <th class="fields-table">Name</th>
            <th class="fields-table">Type</th>
            <th class="fields-table">Dimension</th>
            <th class="fields-table">Population</th>
          </tr>
        </thead>
        <tbody>
          <tr class="row-table" v-for="location in locations" :key="location.id">
            <td class="fields-table">{{ location.id }}</td>
            <td class="fields-table">{{ location.name }}</td>
            <td class="fields-table">{{ location.type }}</td>
            <td class="fields-table">{{ location.dimension }}</td>
            <td class="fields-table">{{ location.residents.length }}</td>
          </tr>
        </tbody>
      </table>
      <nav class="paginationLocation" aria-label="Page navigation example">
        <ul class="pagination pagination-lg justify-content-center">
          <li class="page-item">
            <a class="page-link" @click="currentPage = 1">Primeira</a>
          </li>
          <li class="page-item" v-if="currentPage - 1 > 0" @click="currentPage--">
            <a class="page-link">{{ currentPage - 1 }}</a>
          </li>
          <li class="page-item active">
            <a class="page-link">{{ currentPage }}</a>
          </li>
          <li class="page-item" v-if="currentPage + 1 <= results" @click="currentPage++">
            <a class="page-link">{{ currentPage + 1 }}</a>
          </li>
          <li class="page-item">
            <a class="page-link" @click="currentPage = results">Ultima</a>
          </li>
        </ul>
      </nav>
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
      locations: [],
      currentPage: 1,
      results: 0,
    }
  },
  methods: {
    irParaEpisodio(id) {

      this.$router.push(`/episodes/${id}`)
    },
    getLocation() {
      axios
        .get(
          `https://rickandmortyapi.com/api/location?page=${this.currentPage}`
        )
        .then((res) => {

          this.locations = res.data.results
          this.results = res.data.info.pages
          console.log(this.results)

        })
        .catch((err) => {
          console.log(err);
        });
    }

  },
  watch: {
    currentPage() {

      this.getLocation()

    },
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

.paginationLocation {
  cursor: pointer;
  margin-top: 5px;

}
</style>