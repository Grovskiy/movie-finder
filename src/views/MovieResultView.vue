<script setup lang="ts">
import MoviesCarousel from '~/components/Movie/MoviesCarousel.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <h1>Result page for "{{ route.query.keyword }}"</h1>
  <MoviesCarousel :keyword="route.query.keyword" />
</template>
