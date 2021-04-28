<template>
  <article id="star">
    <section @click="starInfo(star.name)" class="wrapper">
      <h4>{{ star.name }}</h4>
      <article class="description">
        <p>
          gender<span class="character">{{ star.gender }}</span>
        </p>
        <p>hieght<span class="character">{{ star.height }}</span></p>
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
