<template>
  <nav class="tw-bg-header tw-font-roboto">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  font-size: 1.5rem;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      transition: 0.2s cubic-bezier(0.46, 0.03, 0.52, 0.96);
      border-bottom: #fff1f2 solid 2px;
      @apply tw-text-text;
    }
  }
}
</style>
