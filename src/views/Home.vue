<template>
  <div id="home">
    <section class="count">
      <h2>Welcome to StarWars</h2>
      <p class="welcome ">
        We corrently have <span v-if="allStars">{{ allStars.count }}</span> stars
      </p>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},

  computed: {
    allStars() {
      return this.$store.state.allStars.data;
    },
  },
};
</script>
