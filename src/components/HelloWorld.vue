<template>
  <main>
    <div class="catalog">
      <div class="room room101">
        <div class="image"></div>
        <p>Quarto 101</p>
      </div>
      <div class="room room102">
        <div class="image"></div>
        <p>Quarto 102</p>
      </div>
      <div class="room room103">
        <div class="image"></div>
        <p>Quarto 103</p>
      </div>
      <div class="room room104">
        <div class="image"></div>
        <p>Quarto 104</p>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
});
</script>

<style scoped lang="scss">
.catalog {
  display: grid;
  justify-content: center;
  grid: auto / auto auto;
  grid-gap: 30px;

  .image {
    background-color: #2e2e2e;
    border-radius: 8px 8px 0 0;
    width: 250px;
    height: 250px;
  }

  .room {
    border: solid 1px #000;
    border-radius: 10px;
    height: 350px;
    width: 250px;

    p {
      text-align: left;
      padding: 10px;
    }
  }
}
</style>
