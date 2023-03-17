<template>
  <div>
    <div class="table-wrapper">
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
            <router-link tag="td" :to="`/character/${character.id}`" class="fields-table"><img class="size-img"
                :src="character.image" alt=""></router-link>
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
    </div>
    <div class="container-pagination ">
      <nav class="pagination">
        <ul>
          <li>
            <a class="first-last-page" @click="currentPageM('first')">Primeira</a>
          </li>
          <li v-if="currentPage - 1 > 0" @click="currentPageM('down')">
            <a>{{ currentPage - 1 }}</a>
          </li>
          <li class="active">
            <a>{{ currentPage }}</a>
          </li>
          <li v-if="currentPage + 1 <= 165" @click="currentPageM('up')">
            <a>{{ currentPage + 1 }}</a>
          </li>
          <li>
            <a class="first-last-page" @click="currentPageM('last')">Ultima</a>
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
      characters: [],
      currentPage: 1,
      results: 0,
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
    }
  },
  methods: {
    currentPageM(action) {

      if (action == 'last') {
        this.currentPage = 165
        this.lastPage()
      }
      if (action == 'first') {
        this.currentPage = 1
        this.firstPage()
      }

      if (action == 'up') {
        this.currentPage++
        this.incrementPage()
      }
      if (action == 'down') {
        this.currentPage--
        this.decrementPage()
      }

    },
    firstPage() {

      this.v1 = 1
      this.v2 = 2
      this.v3 = 3
      this.v4 = 4
      this.v5 = 5

    },
    lastPage() {

      this.v1 = 821
      this.v2 = 822
      this.v3 = 823
      this.v4 = 824
      this.v5 = 825

    },
    incrementPage() {

      this.v1 = this.v1 + 5
      this.v2 = this.v2 + 5
      this.v3 = this.v3 + 5
      this.v4 = this.v4 + 5
      this.v5 = this.v5 + 5
    },
    decrementPage() {


      this.v1 = this.v1 - 5
      this.v2 = this.v2 - 5
      this.v3 = this.v3 - 5
      this.v4 = this.v4 - 5
      this.v5 = this.v5 - 5

    },
    irParaEpisodio(id) {

      this.$router.push(`/episodes/${id}`)
    },
    irParaLocation(url) {

      this.$router.push(`/character/${url}`)
    },
    getCharacters() {
      axios
        .get(
          'https://rickandmortyapi.com/api/character/[' + this.v1 + ',' + this.v2 + ',' + this.v3 + ',' + this.v4 + ',' + this.v5 + ']'
        )
        .then((res) => {
          console.log(res)
          this.characters = res.data
          this.results = 42

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
<style scoped>
.size-img {
  width: 75px;
  height: 75px;
}

.paginationCharacter {
  cursor: pointer;
  margin-top: 5px;

}

.tabela-custom {

list-style: none;
border: 1px solid #1D9790;
border-radius: 8px;
overflow: hidden;
background-color: #FFF;
font-weight: 600;
overflow-x: auto;

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
  /* Tabela responsiva */
  .table-wrapper {
    
  }
  .table-wrapper table {
    width: 100%;
    white-space: nowrap;
  }
</style>