<template>
  <div class="home pt-3">
    <main-header />
    <shorten-form />
    <main-footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import mainHeader from "@/components/header.vue";
import mainFooter from "@/components/footer.vue";
import shortenForm from "@/components/form.vue";

export default defineComponent({
  name: "Home",
  components: {
    mainHeader,
    mainFooter,
    shortenForm,
  },
});
</script>
