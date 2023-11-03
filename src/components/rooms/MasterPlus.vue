<template>
  <article>
    <div class="room">
      <figure class="image">
        <div class="text-area tw-text-text tw-font-roboto">
          <p class="title tw-text-3xl">Master Plus</p>
          <div class="description">
            <p class="tw-text-md">
              Conforto e tranquilidade! Nada melhor do que após uma longa
              viagem. O quarto Master Plus conta com 1 cama de casal, 1 cama de
              solteiro, 2 banheiros, telefone, frigobar, TV, uma mini
              sala-de-estar, banheira, entre os demais serviços do executivo
              plus. Ideal para 2 à 3 pessoas. A melhor localização do hotel, com
              vista para o jardim.
            </p>
          </div>
        </div>
      </figure>
    </div>
  </article>
</template>

<style lang="scss" scoped>
article {
  margin-bottom: 2rem;
  .room {
    display: flex;
    flex-direction: column;

    figure {
      background-image: url(@/assets/images/master-plus.jpg);
      background-position: center center;
      background-size: 100%;
      background-repeat: no-repeat;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;

      .text-area {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: right;
        text-shadow: 0px 0px 5px rgba(151, 109, 126, 0.575);
        padding: 0 30px;
        height: 25rem;
        width: 45rem;

        .title,
        .description {
          width: 100%;
        }
      }
    }
  }
}
</style>
