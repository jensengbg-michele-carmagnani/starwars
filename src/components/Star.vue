<template>
  <article id="star">
    <section @click="starInfo(star.name)" class="wrapper">
      <h3>{{ star.name }}</h3>
      <article class="description">
        <p>
         <b>gender</b> <span class="character"> {{ star.gender }}</span>
        </p>
        <p><b>height</b> <span class="character">{{ star.height }} cm</span></p>
      </article>
    </section>
  </article>
</template>

<script>
export default {
  name: "Star",
  props: {
    star: {},
  },
  data() {
    return {};
  },
  methods: {
    starInfo(name) {
      this.$router.push(`/starinfo/${name}`);
    },
  },
};
</script>

<style></style>
