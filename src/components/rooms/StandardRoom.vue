<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "StandardRoom",
  setup() {
    const is_expanded = ref(false);
    return { is_expanded };
  },
  methods: {
    ToggleMenu() {
      this.is_expanded = !this.is_expanded;
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
    <div class="text-area" :class="`${is_expanded && 'is-expanded'}`">
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
  overflow: hidden;

  .text-area {
    height: calc(100% - 25rem);
    transition: 0.2s ease-out;
    position: relative;

    .title,
    .description {
      padding: 15px 30px;
      width: 100%;
    }
    &.is-expanded {
      height: 15rem;
      overflow: scroll;
      transition: 0.2s ease-out;
      position: relative;
    }
  }
}
</style>
