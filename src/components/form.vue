<template>
  <div class="flex justify-center lg:w-10/12 mx-auto rounded-md bg-dark-violet">
    <!-- // mobile -->
    <svg
      class="lg:hidden w-full flex rounded"
      xmlns="http://www.w3.org/2000/svg"
      width="307"
      height="158"
    >
      <path
        fill="#4B3F6B"
        fill-rule="evenodd"
        d="M0-.924C0 51.8 15.5 89.562 73 113.953c57.5 24.391 113.055 2.134 168.786 14.894 55.731 12.76 55.731 94.962 108.214 145.549s163.142 62.874 253.12 11.552C693.095 234.626 733.884 114.796 707 44.141 680.115-26.515 628.593-91 380-91 131.407-91 0-53.647 0-.924z"
      />
    </svg>
    <!-- // desktop -->
    <svg
      class="hidden w-full lg:flex mx-auto rounded"
      xmlns="http://www.w3.org/2000/svg"
      width="1510"
      height="128"
    >
      <path
        fill="#4B3F6B"
        fill-rule="evenodd"
        d="M647-93.924c0 52.724 15.5 90.486 73 114.877 57.5 24.391 113.055 2.134 168.786 14.894 55.731 12.76 55.731 94.962 108.214 145.549s163.142 62.874 253.12 11.552c89.976-51.322 130.765-171.152 103.88-241.807C1327.115-119.515 1275.593-184 1027-184c-248.593 0-380 37.353-380 90.076zm-781 213c0 52.724 15.5 90.486 73 114.877 57.5 24.391 113.055 2.134 168.786 14.894 55.731 12.76 55.731 94.962 108.214 145.549s163.142 62.874 253.12 11.552C559.095 354.626 599.884 234.796 573 164.141 546.115 93.485 494.593 29 246 29c-248.593 0-380 37.353-380 90.076z"
      />
    </svg>
    <div
      class="lg:flex absolute mx-auto grid self-center w-full lg:px-10 p-5 justify-items-center gap-4"
    >
      <input
        type="text"
        placeholder="Shorten a link here..."
        class="px-5 py-4 lg:w-4/5 w-full rounded-md font-bold"
      />
      <buttons name="simple" class="flex lg:w-1/4 w-full">Shorten it!</buttons>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import buttons from "../components/button.vue";

export default defineComponent({
  name: "shortenForm",
  components: {
    buttons,
  },
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
});
</script>
