<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MasterSuperior",
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
        <p class="font-roboto italic text-4xl text-left">Master Superior</p>
      </div>
      <div class="description bg-text">
        <p class="font-roboto italic text-lg text-left">
          Luxo e conforto! O quarto Master Superior é um dos maiores e mais
          completos, com uma grande sala de estar, 2 camas de casal, 2
          banheiros, um frigobar, TV, telefone, hidromassagem, entre os demais
          serviços do deluxe. Ideal para 3 à 4 pessoas. Muito bem indicado para
          férias. A melhor vista para o mar.
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
