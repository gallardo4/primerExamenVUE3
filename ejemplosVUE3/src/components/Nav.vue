<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav id="nav">
        <RouterLink :to="{ name: 'provideInject' }">Provide/Inject</RouterLink>
        <RouterLink :to="{ name: 'computed' }">Computed</RouterLink>
        <RouterLink :to="{ name: 'defineProps' }">DefineProps</RouterLink>
        <RouterLink :to="{ name: 'defineEmits' }">DefineEmits</RouterLink>
    </nav>
</template>