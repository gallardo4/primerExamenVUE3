<script setup>
import { RouterLink } from 'vue-router';
import jsonData from '../../public/data.json';

const destinations = jsonData.destinations;
</script>

<template>
  <h1>All destinations</h1>
  <div class="home">
    <div class="destinations">
      <div v-for="destination in destinations" :key="destination.id">
        <RouterLink 
          :to="{ name: 'destination', params: { slug: destination.slug } }"
          class="destination-card"
        >
          <h3>{{ destination.name }}</h3>
          <img :src="`/images/${destination.image}`" :alt="destination.name" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>