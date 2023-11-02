<template>
  <article>
    <div class="room">
      <figure class="image">
        <div class="text-area tw-text-text tw-font-roboto">
          <p class="title tw-text-3xl">Standard</p>
          <div class="description">
            <p class="tw-text-md">
              Simplicidade e comodidade! O quarto Standard conta com 1 cama de
              solteiro, 1 banheiro, telefone, TV, entre os demais serviços
              básicos. Ideal para 2 pessoas. Vista para a rua!
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
      background-image: url(@/assets/images/standard-room.jpg);
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
        width: 35rem;

        .title,
        .description {
          width: 100%;
        }
      }
    }
  }
}
</style>
