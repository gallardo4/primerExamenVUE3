<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { RouterLink } from 'vue-router';
import jsonData from '../../public/data.json';
import GoBack from '@/components/GoBack.vue';

const route = useRoute();
const destination = ref(null);

const loadDestination = () => {
  const slug = route.params.slug;
  destination.value = jsonData.destinations.find(dest => dest.slug === slug);
};

loadDestination();

watch(
  () => route.params.slug,
  (newSlug, oldSlug) => {
    if (newSlug !== oldSlug) {
      destination.value = null;
      loadDestination();
    }
  }
);
</script>

<template>
  <GoBack />

  <div v-if="destination">
    <div class="destination-details">
      <div>
        <h1>{{ destination.name }}</h1>
        <img :src="`/images/${destination.image}`" :alt="destination.name" />
      </div>
      <p>{{ destination.description }}</p>
    </div>

    <div class="experiences">
      <h2>Top experiences in {{ destination.name }}</h2>
      <div class="cards">
        <div class="card" v-for="experience in destination.experiences" :key="experience.slug">
          <RouterLink :to="`/destination/${destination.slug}/${experience.slug}`">
            <img :src="`/images/${experience.image}`"/>
            <div class="card__text">{{ experience.name }}</div>
          </RouterLink>
        </div>
      </div>
    </div>

    <RouterView />
  </div>
</template>