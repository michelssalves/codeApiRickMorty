<template>
  <div class="usuario-lista">
    <div class="container">
      <table class="tabela-custom">
        <thead>
          <tr class="row-table">
            <th class="fields-table">Id</th>
            <th class="fields-table">Image</th>
            <th class="fields-table">Location</th>
            <th class="fields-table">Episodes</th>
          </tr>
        </thead>
        <tbody>
          <tr class="row-table" v-for="character in characters" :key="character.id">
            <router-link tag="td" to="/character/4" class="fields-table">{{ character.id }}</router-link>
            <router-link tag="td" :to="`/character/${character.id}`" class="fields-table"><img class="size-img" :src="character.image"
                alt=""></router-link>
            <router-link tag="td" :to="`/locations/${character.location.name}`" class="fields-table">{{
              character.location.name }}</router-link>
            <td class="fields-table">
              <select @change="irParaEpisodio($event.target.value)">
                <option selected disabled>Selecione</option>
                <option v-for="(episodes, key) in character.episode" :key="episodes.id" :value="key + 1">{{ key + 1 }}
                </option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <nav class="paginationCharacter" aria-label="Page navigation example">
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
      characters: [],
      currentPage: 1,
      results: 0,
    }
  },
  methods: {
    irParaEpisodio(id) {

      this.$router.push(`/episodes/${id}`)
    },
    irParaLocation(url) {

      this.$router.push(`/character/${url}`)
    },
    getCharacters() {
      axios
        .get(
          `https://rickandmortyapi.com/api/character?page=${this.currentPage}`
        )
        .then((res) => {

          this.characters = res.data.results
          this.results = res.data.info.pages

        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  watch: {
    currentPage() {

      this.getCharacters()

    },
  },
  mounted() {
    this.getCharacters()
  },

}
</script>
<style>
.size-img {
  width: 75px;
  height: 75px;
}
.paginationCharacter {
  cursor: pointer;
  margin-top: 5px;

}
</style>