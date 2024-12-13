<script setup>
import { ref } from 'vue';
import DefineEmitsSon from './DefineEmitsSon.vue';

const count = ref(0);
</script>

<template>
    <DefineEmitsSon @increment="count++" />
    <p>Count: {{ count }}</p>
</template>