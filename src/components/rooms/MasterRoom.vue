<template>
  <div
    id="room"
    class="tw-rounded-3xl tw-flex tw-flex-col tw-h-96 tw-w-96 collapsed"
    role="button"
    data-bs-toggle="collapse"
    data-bs-target="#description2"
    aria-expanded="false"
    aria-controls="description2"
  >
    <div class="image tw-bg-image tw-h-96 tw-w-full"></div>
    <div id="text-area">
      <div class="tw-bg-text">
        <p id="title" class="tw-font-roboto tw-italic tw-text-4xl tw-text-left">
          Master
        </p>
      </div>
      <div id="description2" class="collapse tw-bg-text tw-max-h-36">
        <p class="tw-font-roboto tw-text-lg tw-text-left">
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
#room {
  overflow: hidden hidden;

  #text-area {
    #title,
    #description2 {
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
