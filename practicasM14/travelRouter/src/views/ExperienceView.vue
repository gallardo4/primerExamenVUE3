<script setup>
import { computed } from 'vue';
import dataJson from '../../public/data.json'
import { useRoute } from 'vue-router';

const route = useRoute()

const destination = dataJson.destinations.find(
  (dest) => dest.slug === route.params.slug
)

const experience = computed(() => {
    return destination.experiences.find((exp) => exp.slug === route.params.experienceSlug)
});
</script>

<template>
  <div class="experience-show"><h1>{{ experience.name }}</h1>
    <img :src="`/images/${experience.image}`" :alt="experience.name" />
    <p>{{ experience.description }}</p>
  </div>
</template>