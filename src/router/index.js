import Vue from "vue";
import VueRouter from "vue-router";
import Character from "../views/CharacterView.vue";
import Episode from "../views/EpisodeView.vue";
import Location from "../views/LocationView.vue";
import CharacterLista from "../components/CharacterLista.vue";
import CharacterDetalhes from "../components/CharacterDetalhes.vue";
import EpisodeLista from "../components/EpisodeLista.vue";
import EpisodeDetalhes from "../components/EpisodeDetalhes.vue";
import LocationsLista from "../components/LocationsLista.vue";
import LocationsDetalhes from "../components/LocationsDetalhes.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/character",
    name: "characters",
    component: Character,
    props: true,
    children: [
      { path: "", component: CharacterLista },
      { path: ":id", component: CharacterDetalhes, props: true },
    ],
  },
  {
    path: "/episodes",
    name: "episode",
    component: Episode,
    props: true,
    children: [
      { path: "", component: EpisodeLista },
      { path: ":id", component: EpisodeDetalhes, props: true },
    ],
  },
  {
    path: "/locations",
    name: "locations",
    component: Location,
    props: true,
    children: [
      { path: "", component: LocationsLista },
      { path: ":name", component: LocationsDetalhes, props: true },
    ],
  },
  {
    path: "*",
    redirect: "/character",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
