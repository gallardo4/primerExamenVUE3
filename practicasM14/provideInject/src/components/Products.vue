<script setup>
// Importem 'ref' i 'inject' de Vue.
import { ref, inject } from 'vue';

// Importem el component 'Cart'.
import Cart from './Cart.vue';

// Definim un array de productes amb els seus noms i preus.
const products = ref([
  { name: "Hamburger 🍔", price: 5 },
  { name: "Cheeseburger 🧀", price: 6 },
  { name: "Impossible Burger 🥕", price: 7 },
  { name: "Fries 🍟", price: 2 }
]);

const selectedCurrency = ref('€');

const getConvertedPrice = (price) => {
    if (selectedCurrency.value === '€') {
        return price;
    } else if (selectedCurrency.value === '$') {
        return (price * 1.1);
    } else {
        return (price * 0.85);
    }
};

// Definim una variable reactiva 'cart' que emmagatzema els productes afegits a la cistella.
const cart = inject('cart');

// Funció per afegir un producte a la cistella. Mostrem un 'alert' per confirmar que s'ha afegit.
function addToCart(product) {
    cart.value.push(product);

    const cartItems = cart.value.map(item => item.name).join(', ');    

    alert(`Your cart: ${cartItems}`);
}
</script>

<template>
    <div>
        <label>Currency: </label>
        <select v-model="selectedCurrency">
            <option value="€">EUR</option>
            <option value="$">USD</option>
            <option value="£">GBP</option>
        </select>
    </div>

    <!-- Iterem sobre l'array de productes per mostrar el nom i el preu de cada producte, amb un botó per afegir a la cistella -->
    <div v-for="product in products" :key="product.name">
        <p>{{ product.name }} - {{ getConvertedPrice(product.price).toFixed(2) }} {{ selectedCurrency }}</p>
        <button @click="addToCart(product)">Add to the cart</button>
    </div>

    <!-- Incloem el component 'Cart' per mostrar els productes afegits a la cistella -->
    <Cart />
</template>