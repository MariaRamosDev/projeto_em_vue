<script lang="ts">
import { defineComponent } from "vue";
import RoomItem from "./RoomItem.vue";
import axios from "axios";

export default defineComponent({
  components: {
    RoomItem,
  },
  data() {
    return {
      rooms: [
        {
          id: "1",
          title: "Standard",
          description:
            "Simplicidade e comodidade! O quarto Standard conta com 1 cama de solteiro, 1 banheiro, telefone, TV, entre os demais serviços básicos. Ideal para 2 pessoas. Vista para a rua!",
          price: "R$ 40,00",
          img: "https://images.pexels.com/photos/6970065/pexels-photo-6970065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: "2",
          title: "Master",
          description:
            "Aconchego e cuidado! O ideal para relaxar. O quarto Master conta com 2 camas de solteiro, 1 banheiro, telefone, frigobar, TV, entre os demais serviços do executivo. Ideal para 2 pessoas, com uma bela vista para o jardim.",
          price: "R$ 60,00",
          img: "https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: "3",
          title: "Master Plus",
          description:
            "Conforto e tranquilidade! Nada melhor do que após uma longa viagem. O quarto Master Plus conta com 1 cama de casal, 1 cama de solteiro, 2 banheiros, telefone, frigobar, TV, uma mini sala-de-estar, banheira, entre os demais serviços do executivo plus. Ideal para 2 à 3 pessoas. A melhor localização do hotel, com vista para o jardim.",
          price: "R$ 80,00",
          img: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: "4",
          title: "Master Superior",
          description:
            "Luxo e conforto! O quarto Master Superior é um dos maiores e mais completos, com uma grande sala de estar, 2 camas de casal, 2 banheiros, um frigobar, TV, telefone, hidromassagem, entre os demais serviços do deluxe. Ideal para 3 à 4 pessoas. Muito bem indicado para férias. A melhor vista para o mar.",
          price: "R$ 120,00",
          img: "https://images.pexels.com/photos/11671086/pexels-photo-11671086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ],
    };
  },
  async beforeMount() {
    this.rooms = await axios
      .get("http://localhost:3000/rooms")
      .then((response) => response.data)
      .catch((error) => console.log(`Algo deu errado 🫤👉 ${error}`));
  },
});
</script>

<template>
  <article>
    <RoomItem
      v-for="room in rooms"
      :key="room.id"
      :title="room.title"
      :description="room.description"
      :price="room.price"
      :img="room.img"
    />
  </article>
</template>
