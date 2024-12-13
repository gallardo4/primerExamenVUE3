<script setup>
import DefinePropsSon from './DefinePropsSon.vue';
import { ref } from 'vue';

const title = ref('Reactive Title')
const message = ref('Reactive Message')
</script>

<template>
  <div>
    <DefinePropsSon
      :title="title"
      :message="message"
    />
    <DefinePropsSon
      title="Warning Message"
      message="This is a warning message."
    />
    <DefinePropsSon
      title="Error Message"
      message="This is an error message."
    />
    <DefinePropsSon
      title="Default Message"
      message="This message uses the default type."
    />
  </div>
</template>