<script setup>
import { defineProps } from 'vue';

defineProps({
  title: String,
  message: String,
});
</script>

<template>
  <div>
    <h3>{{ title }}</h3>
    <p>{{ message }}</p>
  </div>
</template>