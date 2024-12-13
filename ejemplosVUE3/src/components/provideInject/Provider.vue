<script setup>
import { provide } from 'vue';
import Injector from './Injector.vue';

const message = 'This message is provided by de provider (Provider.vue) and shown by the injector (Injector.vue)';
provide('sharedMessage', message);
</script>

<template>
  <Injector />
</template>