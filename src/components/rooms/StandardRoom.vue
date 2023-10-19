<template>
  <div
    id="room"
    class="tw-rounded-3xl tw-flex tw-flex-col tw-h-96 tw-w-[25rem] collapsed"
    role="button"
    data-bs-toggle="collapse"
    data-bs-target="#description1"
    aria-expanded="false"
    aria-controls="description1"
  >
    <div class="image tw-bg-image tw-h-[25rem] tw-w-full"></div>
    <div id="text-area">
      <div class="tw-bg-text">
        <p id="title" class="tw-font-roboto tw-italic tw-text-4xl tw-text-left">
          Standard
        </p>
      </div>
      <div id="description1" class="collapse tw-bg-text tw-max-h-36">
        <p class="tw-font-roboto tw-italic tw-text-lg tw-text-left">
          Simplicidade e comodidade! O quarto Standard conta com 1 cama de
          solteiro, 1 banheiro, telefone, TV, entre os demais serviços básicos.
          Ideal para 2 pessoas. Vista para a rua!
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
    #description1 {
      padding: 10px 30px;
      width: 100%;
      overflow: hidden scroll;
    }
  }
}
</style>
