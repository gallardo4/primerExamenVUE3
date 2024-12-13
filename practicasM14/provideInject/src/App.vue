<script setup>
// Importem les funcions 'ref' i 'injects' de Vue per gestionar variables reactives i compartir dades amb altres components.
import { ref, provide } from 'vue';
// Importem el component 'Products' des de la carpeta 'components'.
import Products from './components/Products.vue';

// Definim una variable reactiva 'orderName' per emmagatzemar el nom de la comanda.
const orderName = ref('');
const cart = ref([]);

provide('cart', cart);

function placeOrder() {
  if (!cart) alert('Cart is unavailable')
  if (cart.value.length === 0) {
    alert('Your cart is empty. Add something into it!');
  } else {
    if (!orderName.value) {
      alert("Your secret order has been placed!")
      cart.value.splice(0);
    } else {
      alert(`Your order "${orderName.value}" has been placed!`);
      cart.value.splice(0);
    }
  }
}
</script>

<template>
  <div>
    <!-- Mostrem el nom de la comanda i un input per canviar-lo dinàmicament amb v-model -->
    <h1 v-if="!orderName">Order</h1>
    <h1 v-else>{{ orderName }}</h1>
    <input v-model="orderName" placeholder="Order name" />
    <button @click.stop="placeOrder()">Place order</button>

    <!-- Incloem el component 'Products' per mostrar i gestionar els productes -->
    <Products />
  </div>
</template>