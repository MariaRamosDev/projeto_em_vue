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
  <h1 class="tw-text-text tw-font-roboto tw-mt-5 tw-text-5xl fw-light">
    Hotel Sereno
  </h1>
  <div id="catalog" class="tw-flex tw-flex-col tw-p-10">
    <StandardRoom />
    <MasterRoom />
    <MasterPlus />
    <MasterSuperior />
  </div>
</template>

<style scoped lang="scss">
#catalog {
  grid: auto / auto auto;
}
</style>
