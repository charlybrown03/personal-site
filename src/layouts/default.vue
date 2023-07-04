<script setup>
useHead({
  htmlAttrs: {
    lang: 'es-ES'
  }
})
</script>

<template>
  <div id="app">
    <slot />
  </div>
</template>

<style lang="scss">
html {
  font-family: "Bitter", sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
}
</style>
