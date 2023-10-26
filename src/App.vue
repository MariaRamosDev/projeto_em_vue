<template>
  <nav class="tw-bg-header/75 tw-font-roboto tw-text-4xl">
    <router-link to="/">Início</router-link> |
    <router-link to="/about">Sobre</router-link>
  </nav>
  <main>
    <router-view />
  </main>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #502c3b;
  background-color: #881337;
}

nav {
  padding: 30px;
  font-size: 1.5rem;

  a {
    font-weight: bold;
    color: #502c3b;

    &.router-link-exact-active {
      transition: 0.2s cubic-bezier(0.46, 0.03, 0.52, 0.96);
      border-bottom: #fff1f2 solid 2px;
      @apply tw-text-text;
    }
  }
}
</style>
