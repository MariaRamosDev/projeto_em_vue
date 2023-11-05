<template>
  <article>
    <div class="room">
      <figure class="image">
        <div class="text-area tw-text-text tw-font-roboto">
          <p class="title tw-text-3xl">Master Superior</p>
          <div class="description">
            <p class="tw-text-md">
              Luxo e conforto! O quarto Master Superior é um dos maiores e mais
              completos, com uma grande sala de estar, 2 camas de casal, 2
              banheiros, um frigobar, TV, telefone, hidromassagem, entre os
              demais serviços do deluxe. Ideal para 3 à 4 pessoas. Muito bem
              indicado para férias. A melhor vista para o mar.
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
      background-image: url(@/assets/images/master-superior.jpg);
      background-position: center center;
      background-size: 100%;
      background-repeat: no-repeat;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;

      .text-area {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;
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
