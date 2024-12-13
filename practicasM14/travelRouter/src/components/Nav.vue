<script setup>
import { RouterLink } from 'vue-router';
import jsonData from '../../public/data.json';

const destinations = jsonData.destinations;
</script>

<template>
  <RouterLink to="/">Home</RouterLink>
  <div v-for="destination in destinations" :key="destination.id">
    <RouterLink :to="{ name: 'destination', params: { slug: destination.slug } }">{{ destination.name }}</RouterLink>
  </div>
</template>