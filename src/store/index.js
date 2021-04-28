import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    API: "https://swapi.dev/api/people",
    allStars: {},
    stars:[]
  },
  mutations: {
    setStars(state, data) {
      state.allStars = data;
      state.stars = data.data.results
    }
  },
  actions: {
   async getStars(ctx ) {
      const data = await axios.get(`${ctx.state.API}`)
      console.log('ALL STARS ', data.data)
      ctx.commit('setStars', data)
    },
    async goNext(ctx) {
      console.log('NEXT');
      const data = await axios.get(`${ctx.state.allStars.data.next}`)
      console.log('next', data)
      ctx.commit('setStars', data)
    },
    async goBack(ctx) {
      console.log('NEXT');
      const data = await axios.get(`${ctx.state.allStars.data.previous}`)
      console.log('next', data)
      ctx.commit('setStars', data)
    }
  },
  getters: {
  },
  modules: {},
});
