<template>
  <main id="all-stars">
    <header class="header">
      <img class="logo" src="../assets/logo.png" alt="" />
      <!-- <input type="text" /> -->
    </header>
    <section class="gallery">
      <Star v-for="(star, index) in allStars" :key="index" :star="star" />
    </section>
    <section class="browse">
      <img
        @click="goBack"
        class="arrow-left"
        src="../assets/left-arrow-64.png"
        alt=""
      />
      <img
        @click="goNext"
        class="arrow-right"
        src="../assets/right-arrow-64.png"
        alt=""
      />
    </section>
  </main>
</template>

<script>
import Star from "../components/Star.vue";
export default {
  name: "AllStars",
  components: {
    Star,
  },
  data() {
    return {
      active: false,
    };
  },
  methods: {
    starInfo(index) {
      this.$route.push(`/starinfo/${index}`);
    },
    goNext() {
      if (this.$store.state.allStars.data.next) {
        this.$store.dispatch("goNext");
      }
    },
    goBack() {
      if (this.$store.state.allStars.data.previous) {
        this.$store.dispatch("goBack");
      }
    },
  },

  computed: {
    allStars() {
      return this.$store.state.stars;
    },
  },
};
</script>
