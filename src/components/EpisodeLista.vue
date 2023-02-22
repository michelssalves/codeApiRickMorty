<template>
  <div class="usuario-lista">
    <div class="container">
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
          <tr class="row-table" v-for="episode in episodes" :key="episode.id">
            <td class="fields-table">{{ episode.id }}</td>
            <td class="fields-table">{{ episode.name }}</td>
            <td class="fields-table">{{ episode.air_date }}</td>
            <td class="fields-table">{{ episode.episode }}</td>
          </tr>
        </tbody>
      </table>
      <nav class="paginationEpisode" aria-label="Page navigation example">
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
  data() {
    return {
      episodes: [],
      currentPage: 1,
      results: 0,
    }
  },
  methods: {
    irParaEpisodio(id) {

      this.$router.push(`/episodes/${id}`)
    },
    getEpisodes() {
      axios
        .get(
          `https://rickandmortyapi.com/api/episode?page=${this.currentPage}`
        )
        .then((res) => {
          console.log(res.data.results)
          this.episodes = res.data.results
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

      this.getEpisodes()

    },
  },
  mounted() {
    this.getEpisodes()
  },

}
</script>
<style>
.size-img {
  width: 75px;
  height: 75px;
}
.paginationEpisode {
  cursor: pointer;
  margin-top: 5px;
}
</style>