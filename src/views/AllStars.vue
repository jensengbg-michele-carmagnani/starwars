<template>
  <main id="all-stars">
    <header class="header">
      <img class="logo" src="../assets/logo.png" alt="" />
      <aside class="search">
        <input
          v-model="name"
          type="text "
          class="search-input"
          placeholder="Search by name "
        />
        <button @click="goToStar" class="btn-search">
          <img src="../assets/search.svg" alt="" />
        </button>
      </aside>
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
      name: "",
    };
  },
  methods: {
    async goToStar() {
      if (this.name == "") {
        alert("You must fill the input");
        return;
      } else {
        await this.$store.dispatch("goToStar", this.name);
      }
      if (this.$store.state.name || this.name === "") {
        this.name = "";
        this.$router.push(`/searchedstar/`);
      } else {
        this.name = "";
        alert("There is no matched name");
      }
    },
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
