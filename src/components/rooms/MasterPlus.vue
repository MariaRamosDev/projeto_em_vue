<template>
  <div
    id="room"
    class="tw-rounded-3xl tw-flex tw-flex-col tw-h-96 tw-w-[25rem] collapsed"
    role="button"
    data-bs-toggle="collapse"
    data-bs-target="#description3"
    aria-expanded="false"
    aria-controls="description3"
  >
    <div class="image tw-bg-image tw-h-[25rem] tw-w-full"></div>
    <div id="text-area">
      <div class="tw-bg-text">
        <p id="title" class="tw-font-roboto tw-italic tw-text-4xl tw-text-left">
          Master Plus
        </p>
      </div>
      <div id="description3" class="collapse tw-bg-text tw-max-h-36">
        <p class="tw-font-roboto tw-italic tw-text-lg tw-text-left">
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
#room {
  overflow: hidden hidden;

  #text-area {
    transition: 0.2s ease-out;

    #title,
    #description3 {
      padding: 10px 30px;
      width: 100%;
      overflow: hidden scroll;
    }
  }
}
</style>
