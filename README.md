# Guía de Estudio: Vue 3 (Composition API - `script setup`)

Este documento proporciona explicaciones y ejemplos de los principales conceptos que necesitas para tu examen de Vue 3 con la Composition API utilizando `script setup`.

---

## **1. `computed`**

`computed` se utiliza para declarar propiedades computadas, es decir, valores que se calculan en función de otras propiedades reactivas y se actualizan automáticamente cuando estas cambian.

### Ejemplo:
```vue
<script setup>
import { ref, computed } from 'vue';

const count = ref(0);
const doubleCount = computed(() => count.value * 2);

const increment = () => {
  count.value++;
};
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Double Count: {{ doubleCount }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>
```

---

## **2. Conectar con un JSON**

Para conectarse a un archivo JSON o API, puedes usar la función `fetch` dentro de `onMounted` o mediante una llamada en un `watchEffect`.

### Ejemplo:
```vue
<script setup>
import { ref, onMounted } from 'vue';

const users = ref([]);

onMounted(async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  users.value = await response.json();
});
</script>

<template>
  <div>
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>
```

---

## **3. `defineProps`**

`defineProps` permite recibir propiedades desde un componente padre.

### Ejemplo:
**Componente Hijo:**
```vue
<script setup>
defineProps(['title']);
</script>

<template>
  <h1>{{ title }}</h1>
</template>
```

**Componente Padre:**
```vue
<script setup>
import ChildComponent from './ChildComponent.vue';
</script>

<template>
  <ChildComponent title="Hello from Parent" />
</template>
```

---

## **4. `defineEmits`**

`defineEmits` se usa para emitir eventos personalizados al componente padre.

### Ejemplo:
**Componente Hijo:**
```vue
<script setup>
defineEmits(['increment']);

const handleClick = () => {
  emit('increment');
};
</script>

<template>
  <button @click="handleClick">Increment</button>
</template>
```

**Componente Padre:**
```vue
<template>
  <ChildComponent @increment="count++" />
  <p>Count: {{ count }}</p>
</template>

<script setup>
import { ref } from 'vue';
import ChildComponent from './ChildComponent.vue';

const count = ref(0);
</script>
```

---

## **5. `provide` / `inject`**

`provide` e `inject` se utilizan para compartir datos o funciones entre componentes ancestro-descendientes sin necesidad de pasarlas explícitamente como props.

### Ejemplo:
**Componente Ancestro (Provider):**
```vue
<script setup>
import { provide } from 'vue';

const message = 'Hello from Ancestor';
provide('sharedMessage', message);
</script>

<template>
  <ChildComponent />
</template>
```

**Componente Descendiente (Injector):**
```vue
<script setup>
import { inject } from 'vue';

const sharedMessage = inject('sharedMessage');
</script>

<template>
  <p>{{ sharedMessage }}</p>
</template>
```

---

## **6. Router**

Vue Router se utiliza para gestionar la navegación en aplicaciones Vue.

### Configuración Básica:

1. **Instalar Vue Router:**
   ```bash
   npm install vue-router
   ```

2. **Configurar Rutas:**
   ```javascript
   import { createRouter, createWebHistory } from 'vue-router';
   import Home from './components/Home.vue';
   import About from './components/About.vue';

   const routes = [
     { path: '/', component: Home },
     { path: '/about', component: About },
   ];

   const router = createRouter({
     history: createWebHistory(),
     routes,
   });

   export default router;
   ```

3. **Integrar el Router:**
   En `main.js`:
   ```javascript
   import { createApp } from 'vue';
   import App from './App.vue';
   import router from './router';

   const app = createApp(App);
   app.use(router);
   app.mount('#app');
   ```

4. **Usar en Plantillas:**
   ```vue
   <template>
     <nav>
       <router-link to="/">Home</router-link>
       <router-link to="/about">About</router-link>
     </nav>
     <router-view />
   </template>
   
