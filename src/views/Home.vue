<template>
  <div class="home pt-3">
    <main-header />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import mainHeader from "@/components/header.vue";

export default defineComponent({
  name: "Home",
  components: {
    mainHeader,
  },
});
</script>
