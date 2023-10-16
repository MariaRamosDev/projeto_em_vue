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
  <main class="bg-background">
    <div class="catalog grid gap-5 grid-cols-2 grid-rows-2 justify-center p-10">
      <StandardRoom />
      <MasterRoom />
      <MasterPlus />
      <MasterSuperior />
    </div>
  </main>
</template>

<style scoped lang="scss">
.catalog {
  grid: auto / auto auto;
}
</style>
