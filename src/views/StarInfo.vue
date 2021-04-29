<template>
  <section id="star-info">
    <nav class="name">
      <h1>{{ getInfo.star.name }}</h1>
    </nav>

    <article class="personal-info">
      <article class="trait">
        <h2>Trait</h2>
        <p class="space"><span>Height</span><b>{{ getInfo.star.height }} cm</b></p>
        <p class="space"><span>Mass</span><b>{{ getInfo.star.mass }} kg</b></p>
        <p class="space">
          <span>Hair color</span><b>{{ getInfo.star.hair_color }}</b>
        </p>
        <p class="space"><span>Eye color</span><b>{{ getInfo.star.eye_color }}</b></p>
        <p class="space"><span>Birthday</span><b>{{ getInfo.star.birth_year }}</b></p>
        <p class="space"><span>gender</span><b>{{ getInfo.star.gender }}</b></p>
        <p class="space"><span>gender</span><b>{{ getInfo.star.skin_color }}</b></p>
      </article>
      <aside class="personal-movies" @click="getFilms(getInfo.star.films)">
        <h2 v-if="films"><img class="click" src="../assets/click64.png" alt="">  Movies </h2>

        <Films v-for="(film, index) in films" :key="index" :film="film" />
      </aside>
    </article>
  </section>
</template>

<script>
import axios from "axios";
import Films from "../components/Films.vue";
export default {
  name: "StarInfo",
  components: {
    Films,
  },
  data() {
    return {
      films: [],
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
      const star = this.$store.state.stars.find(
        (star) => star.name == this.$route.params.name
      );

      return { star };
    },
  },
};
</script>

<style></style>
