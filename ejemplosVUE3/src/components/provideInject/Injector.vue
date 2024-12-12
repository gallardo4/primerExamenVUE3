<script setup>
import { inject } from 'vue';

const sharedMessage = inject('sharedMessage');
</script>

<template>
  <p>{{ sharedMessage }}</p>
</template>