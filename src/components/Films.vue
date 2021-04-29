<template>
  <section id="films">
    <p class="title">
      <span >Title</span>
      <b class="title-name">{{ film.title }}</b>
    </p>
  </section>
</template>

<script>
export default {
  name: "Film",
  props: {
    film: {},
  },
};
</script>

<style></style>
