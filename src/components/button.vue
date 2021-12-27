<template>
  <div>
    <button
      v-if="name == 'full'"
      class="py-3 px-10 text-white dark:text-gray-800 bg-cyan hover:opacity-75 font-bold rounded-full w-full"
    >
      <slot></slot>
    </button>
    <button
      v-else-if="name == 'simple'"
      class="py-3 px-10 text-white dark:text-gray-800 bg-cyan hover:opacity-75 font-bold rounded w-full"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "button",
  props: {
    name: String,
  },
});
</script>
