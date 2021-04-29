import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
// import router from "./../router";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    API: "https://swapi.dev/api/people",
    API2: "https://swapi.dev/api/people/?search=",
    allStars: {},
    stars: [],
    name: {},
    films:[]
  },
  mutations: {
    setStars(state, data) {
      state.allStars = data;
      state.stars = data.data.results;
    },
    setName(state, name) {
      state.name = name;
    },
    setFilms(state, films) {
      state.films = films
    }
  },
  actions: {
    async getStars(ctx) {
      const data = await axios.get(`${ctx.state.API}`);

      ctx.commit("setStars", data);
    },
    async goNext(ctx) {
      console.log("NEXT");
      const data = await axios.get(`${ctx.state.allStars.data.next}`);

      ctx.commit("setStars", data);
    },
    async goBack(ctx) {
      console.log("NEXT");
      const data = await axios.get(`${ctx.state.allStars.data.previous}`);

      ctx.commit("setStars", data);
    },
    async goToStar(ctx, name) {
      console.log("NAME", name);
      const res = await axios.get(`${ctx.state.API2}${name}`);
      console.log("STAR NAME ", res.data.results[0]);
      ctx.commit("setName", res.data.results[0]);
      // router.push('/searchedstar')
    },
    getFilms(ctx, star) {
      const films = []
      star.films.forEach(async (film) => {
        let res = await axios.get(film);
        console.log("REST", res);
        films.push(res.data);
      });
      ctx.commit('setFilms', films)
    }
  },
  getters: {},
  modules: {},
});
