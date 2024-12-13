<script setup>
// Importem la funció 'inject' de Vue per accedir a la variable 'cart' proporcionada pel component pare.
import { inject } from 'vue';

// Utilitzem 'inject' per rebre la variable 'cart' i poder mostrar els productes afegits a la cistella.
const cart = inject('cart');
</script>

<template>
    <div>
        <!-- La teva cistella -->
        <h2>Your cart:</h2>
        <ul>
            <!-- Iterem sobre l'array 'cart' per mostrar el nom i el preu de cada producte afegit -->
            <li v-for="item in cart" :key="item.name">
                {{ item.name }} - {{ item.price }}€
            </li>
        </ul>
    </div>
</template>