<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink :to="{ name: 'provideInject' }">Provide/Inject</RouterLink>
        <RouterLink :to="{ name: 'computed' }">Computed</RouterLink>
        <RouterLink :to="{ name: 'defineProps' }">DefineProps</RouterLink>
    </nav>
</template>