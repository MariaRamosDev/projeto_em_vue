<template>
  <header class="tw-bg-header/75 tw-font-roboto tw-text-md">
    <span
      class="tw-text-[#502c3b] tw-font-roboto tw-mt-5 tw-text-2xl tw-font-semibold"
    >
      Hotel Sereno
    </span>
    <nav>
      <router-link to="/" class="tw-text-[#210B23]">Início</router-link> |
      <router-link to="/about" class="tw-text-[#210B23]">Sobre</router-link>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
</template>

<style lang="scss">
body {
  background-color: #fefbfe;

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #502c3b;
    background-color: #ffe4e6;
    width: 75rem;
    margin: auto;

    header {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      line-height: 3rem;
      vertical-align: middle;
      height: 4.3rem;
      color: #502c3b;

      nav {
        padding: 10px;

        a {
          font-weight: bold;
          color: #502c3b;

          &.router-link-exact-active {
            transition: 0.2s cubic-bezier(0.46, 0.03, 0.52, 0.96);
            border-bottom: #9c507c solid 2px;
            color: #9c507c;
          }
        }
      }
    }
    main {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
