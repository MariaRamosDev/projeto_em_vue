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
  <StandardRoom />
  <MasterRoom />
  <MasterPlus />
  <MasterSuperior />
</template>
