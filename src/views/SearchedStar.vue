<template>
  <section id="star-info" v-if="getInfo.films">
    <nav class="name">
      <h1>{{ getInfo.name }}</h1>
    </nav>

    <article class="personal-info">
      <article class="trait">
        <p class="space"><span>Height</span>{{ getInfo.height }} cm</p>
        <p class="space"><span>Mass</span>{{ getInfo.mass }} kg</p>
        <p class="space">
          <span>Hair color</span>{{ getInfo.hair_color }}
        </p>
        <p class="space"><span>Eye color</span>{{ getInfo.eye_color }}</p>
        <p class="space"><span>Birthday</span>{{ getInfo.birth_year }}</p>
        <p class="space"><span>gender</span>{{ getInfo.gender }}</p>
        <p class="space"><span>gender</span>{{ getInfo.skin_color}}</p>
      </article>
      <aside >
        <h2>Movie</h2>
        <!-- {{ getInfo.films[3].title }} -->
        <Films  v-for="(film , index) in getInfo.films" :key="index" :film="film" />
      </aside>
    </article>
  </section>
</template>

<script>
import Films from '../components/Films.vue'
export default {
  name: "SearchedStar",
  components: {
    Films
  },
  data() {
    return {};
  },

  computed: {
    getInfo() {
      return this.$store.state.name;
    },
  },
};
</script>

<style></style>
