<script setup>
import { provide } from 'vue';
import Injector from './Injector.vue';

const message = 'Hello from Ancestor';
provide('sharedMessage', message);
</script>

<template>
  <Injector />
</template>