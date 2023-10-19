<script lang="ts">
import { defineComponent } from "vue";
import StandardRoom from "./rooms/StandardRoom.vue";
import MasterRoom from "./rooms/MasterRoom.vue";
import MasterPlus from "./rooms/MasterPlus.vue";
import MasterSuperior from "./rooms/MasterSuperior.vue";

export default defineComponent({
  name: "HelloWorld",
  components: {
    StandardRoom,
    MasterRoom,
    MasterPlus,
    MasterSuperior,
  },
});
</script>

<template>
  <main class="tw-bg-background">
    <div
      id="catalog"
      class="tw-grid tw-gap-5 tw-grid-cols-2 tw-grid-rows-2 tw-justify-center tw-p-10"
    >
      <StandardRoom />
      <MasterRoom />
      <MasterPlus />
      <MasterSuperior />
    </div>
  </main>
</template>

<style scoped lang="scss">
#catalog {
  grid: auto / auto auto;
}
</style>
