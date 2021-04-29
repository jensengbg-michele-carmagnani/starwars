<template>
  <section id="star-info" v-if="getInfo.films">
    <nav class="name">
      <h1>{{ getInfo.name }}</h1>
    </nav>

    <article class="personal-info">
      <article class="trait">
        <h2>Trait</h2>
        <p class="space"><span>Height</span> <b>{{ getInfo.height }} cm</b></p>
        <p class="space"><span>Mass</span><b>{{ getInfo.mass }} kg</b></p>
        <p class="space">
          <span>Hair color</span><b>{{ getInfo.hair_color }}</b>
        </p>
        <p class="space"><span>Eye color</span><b>{{ getInfo.eye_color }}</b></p>
        <p class="space"><span>Birthday</span><b>{{ getInfo.birth_year }}</b></p>
        <p class="space"><span>gender</span><b>{{ getInfo.gender }}</b></p>
        <p class="space"><span>gender</span><b>{{ getInfo.skin_color}}</b></p>
      </article>
      <aside class="personal-movies" @click="getFilms(getInfo.films)">
        <h2 ><img class="click" src="../assets/click64.png" alt="">  Movies </h2>

        <Films v-for="(film, index) in films" :key="index" :film="film" />
      </aside>
    </article>
  </section>
</template>

<script>
import axios from  'axios'
import Films from '../components/Films.vue'
export default {
  name: "SearchedStar",
  components: {
    Films
  },
  data() {
    return {
      films:[]
    };
  },
  methods: {
    getFilms(star) {
      console.log("star in films", star);
      let films = [];
      star.forEach(async (film) => {
        let res = await axios.get(film);
        films.push(res.data);
      });
      this.films = films;

      console.log("Films", films);
    },
  },

  computed: {
    getInfo() {
      return this.$store.state.name;
    },
  },
};
</script>

<style></style>
