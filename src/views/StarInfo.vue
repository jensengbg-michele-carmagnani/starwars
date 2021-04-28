<template>
  <section id="star-info" v-if="getInfo.films">
    <nav class="name">
      <h1>{{ getInfo.star.name }}</h1>
    </nav>

    <article class="personal-info">
      <article class="trait">
        <p class="space"><span>Height</span>{{ getInfo.star.height }} cm</p>
        <p class="space"><span>Mass</span>{{ getInfo.star.mass }} kg</p>
        <p class="space">
          <span>Hair color</span>{{ getInfo.star.hair_color }}
        </p>
        <p class="space"><span>Eye color</span>{{ getInfo.star.eye_color }}</p>
        <p class="space"><span>Birthday</span>{{ getInfo.star.birth_year }}</p>
        <p class="space"><span>gender</span>{{ getInfo.star.gender }}</p>
        <p class="space"><span>gender</span>{{ getInfo.star.skin_color}}</p>
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
import axios from "axios";
 import Films from '../components/Films.vue'
export default {
  name: "StarInfo",
  components: {
     Films
  },
  data() {
    return {};
  },
  

  computed: {
    getInfo () {
      const star = this.$store.state.stars.find(
        (star) => star.name == this.$route.params.name
      );
      
      // console.log(star.films);

      let films = []
     
        
     star.films.forEach(async (film) => {
       let res = await axios.get(film);
          console.log('REST',res)
          films.push(res.data);
        });
      
      return { star, films };
    },
  },
};
</script>

<style></style>
