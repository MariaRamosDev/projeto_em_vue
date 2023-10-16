<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MasterRoom",
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
    <div class="image bg-image h-[25rem] 2-ful"></div>
    <div class="text-area" :class="`${is_expanded && 'is-expanded'}`">
      <div class="title bg-text">
        <p class="font-roboto italic text-4xl text-left">Master</p>
      </div>
      <div class="description bg-text">
        <p class="font-roboto italic text-lg text-left">
          Aconchego e cuidado! O ideal para relaxar. O quarto Master conta com 2
          camas de solteiro, 1 banheiro, telefone, frigobar, TV, entre os demais
          serviços do executivo. Ideal para 2 pessoas, com uma bela vista para o
          jardim.
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
      overflow: scroll;
      height: 45rem;
    }
  }
}
</style>
