<template>
  <div
    id="room"
    class="tw-rounded-3xl tw-flex tw-flex-col tw-h-96 tw-w-96 collapsed"
    role="button"
    data-bs-toggle="collapse"
    data-bs-target="#description4"
    aria-expanded="false"
    aria-controls="description4"
  >
    <div class="image tw-bg-image tw-h-96 tw-w-full"></div>
    <div id="text-area">
      <div class="tw-bg-text">
        <p id="title" class="tw-font-roboto tw-italic tw-text-4xl tw-text-left">
          Master Superior
        </p>
      </div>
      <div id="description4" class="collapse tw-bg-text tw-max-h-36">
        <p class="tw-font-roboto tw-text-lg tw-text-left">
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
#room {
  overflow: hidden hidden;

  #text-area {
    #title,
    #description4 {
      padding: 10px 30px;
      width: 100%;
      overflow: hidden scroll;
    }
    .collapsing {
      transition: 0.2s cubic-bezier(0.46, 0.03, 0.52, 0.96);
    }
  }
}
</style>
