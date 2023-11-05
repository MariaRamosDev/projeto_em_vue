<template>
  <article>
    <div class="room">
      <figure class="image">
        <div class="text-area tw-text-text tw-font-roboto">
          <p class="title tw-text-3xl">Master</p>
          <div class="description">
            <p class="tw-text-md">
              Aconchego e cuidado! O ideal para relaxar. O quarto Master conta
              com 2 camas de solteiro, 1 banheiro, telefone, frigobar, TV, entre
              os demais serviços do executivo. Ideal para 2 pessoas, com uma
              bela vista para o jardim.
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
      background-image: url(@/assets/images/master.jpg);
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
