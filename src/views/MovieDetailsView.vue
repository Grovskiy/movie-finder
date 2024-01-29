<script setup lang="ts">
import MovieConcrete from '~/components/Movie/MovieConcrete.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <h1>Details page</h1>
  <MovieConcrete :id="route.query.id" />
</template>

<style scoped></style>
