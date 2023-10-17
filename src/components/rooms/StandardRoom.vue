<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "StandardRoom",
  setup() {
    const EXPANDED = ref(false);
    return { EXPANDED };
  },
  methods: {
    ToggleMenu() {
      this.EXPANDED = !this.EXPANDED;
    },
  },
});
</script>

<template>
  <div
    class="room rounded-3xl flex flex-col h-[30rem] w-[25rem]"
    @click="ToggleMenu"
  >
    <div class="image bg-image h-[25rem] w-full"></div>
    <div class="text-area" :class="`${EXPANDED && 'expanded'}`">
      <div class="title bg-text">
        <p class="font-roboto italic text-4xl text-left">Standard</p>
      </div>
      <div class="description bg-text">
        <p class="font-roboto italic text-lg text-left">
          Simplicidade e comodidade! O quarto Standard conta com 1 cama de
          solteiro, 1 banheiro, telefone, TV, entre os demais serviços básicos.
          Ideal para 2 pessoas. Vista para a rua!
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.room {
  overflow: hidden hidden;

  .text-area {
    height: 5rem;
    transition: 0.2s ease-out;

    .title,
    .description {
      padding: 10px 30px;
      width: 100%;
    }
    &.expanded {
      height: 10rem;
      overflow: visible scroll;
      transition: 0.2s ease-out;
    }
  }
}
</style>
