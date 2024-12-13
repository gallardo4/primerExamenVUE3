<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['increment']);

const handleClick = () => {
  emit('increment');
};
</script>

<template>
  <button @click="handleClick">Increment</button>
</template>