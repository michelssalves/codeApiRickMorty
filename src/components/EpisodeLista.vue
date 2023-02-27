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
      <div class="container-pagination ">
      <nav class="pagination">
        <ul>
          <li>
            <a class="first-last-page" @click="currentPage = 1">Primeira</a>
          </li>
          <li v-if="currentPage - 1 > 0" @click="currentPage--">
            <a>{{ currentPage - 1 }}</a>
          </li>
          <li class="active">
            <a>{{ currentPage }}</a>
          </li>
          <li v-if="currentPage + 1 <= results" @click="currentPage++">
            <a>{{ currentPage + 1 }}</a>
          </li>
          <li>
            <a class="first-last-page" @click="currentPage = results">Ultima</a>
          </li>
        </ul>
      </nav>
    </div>
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
<style scoped>
.tabela-custom {

list-style: none;
border: 1px solid #1D9790;
border-radius: 8px;
overflow: hidden;
background-color: #FFF;
font-weight: 600;

}

.tabela-custom .fields-table {

padding: 0px 30px;
cursor: pointer;
border: 1px solid #777777;
}

.tabela-custom .row-table:hover {
background-color: #FFF3;
}

.tabela-custom .fields-table:nth-child(n + 2) {
border-top: 1px solid #777777;

}

.pagination ul {

  justify-content: center;
  display: flex;
  list-style: none;
  border-radius: 50px;
  overflow: hidden;
  cursor: pointer;
}
.pagination ul {

justify-content: center;
display: flex;
list-style: none;
border-radius: 50px;
overflow: hidden;
cursor: pointer;
}

.pagination a {

display: flex;
background-color: #ffffff;
padding: 10px 10px;
text-decoration: none;
font-weight: 600;
border: 1px solid;
border-radius: 50px;

}

.pagination a:hover {

background-color: #1D9790;

}

.pagination .active {
background-color: #1D9790;
border-radius: 50px;
}

.pagination .active a {
background-color: #1D9790;
}

.pagination .first-last-page {
background-color: #ffffff;
}
</style>