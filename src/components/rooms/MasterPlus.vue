<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MasterPlus",
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
        <p class="font-roboto italic text-4xl text-left">Master Plus</p>
      </div>
      <div class="description bg-text">
        <p class="font-roboto italic text-lg text-left">
          Conforto e tranquilidade! Nada melhor do que após uma longa viagem. O
          quarto Master Plus conta com 1 cama de casal, 1 cama de solteiro, 2
          banheiros, telefone, frigobar, TV, uma mini sala-de-estar, banheira,
          entre os demais serviços do executivo plus. Ideal para 2 à 3 pessoas.
          A melhor localização do hotel, com vista para o jardim.
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

    .title,
    .description {
      padding: 15px 30px;
      width: 100%;
    }
    &.is-expanded {
      height: 15rem;
      overflow: scroll;
      transition: 0.2s ease-out;
    }
  }
}
</style>
