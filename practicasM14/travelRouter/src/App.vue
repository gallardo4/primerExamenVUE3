<script setup>
import { RouterView } from 'vue-router'
import Nav from './components/Nav.vue';
</script>

<template>
  <header>
    <nav id="nav">
      <Nav />
    </nav>
  </header>

  <div class="container">
    <RouterView />
  </div>
</template>