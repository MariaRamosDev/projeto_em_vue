<script lang="ts">
import { defineComponent } from "vue";
import DevItem from "@/components/DevItem.vue";
import axios from "axios";

export default defineComponent({
  name: "AboutView",
  components: {
    DevItem,
  },
  data() {
    return {
      devs: [],
    };
  },
  async beforeMount() {
    this.devs = await axios
      .get("http://localhost:3000/devs")
      .then((response) => response.data)
      .catch((error) => console.log(`Algo deu errado: ${error}`));
  },
});
</script>

<template>
  <div class="about">
    <p>Essa página foi criada por:</p>
    <section>
      <DevItem
        v-for="dev in devs"
        :key="dev.id"
        :name="dev.name"
        :username="dev.username"
        :img="dev.img"
        :link="dev.link"
      />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.about {
  margin-top: 5rem;
  height: 28.3rem;

  p {
    font-size: 2rem;
    position: relative;
    transform: translateY(-2rem);
  }

  section {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: 20rem;
  }
}
</style>
