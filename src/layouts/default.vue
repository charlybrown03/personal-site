<template>
  <div class="app">
    <nuxt />
  </div>
</template>

<script>
export default {
  head () {
    return {
      htmlAttrs: {
        lang: this.currentIsoLocale,
      },
    }
  },

  computed: {
    currentIsoLocale () {
      const { locales, locale } = this.$nuxt.$i18n

      return locales.find(l => l.code === locale).iso
    },
  },
}
</script>

<style lang="scss">
html {
  font-family: "Bitter", sans-serif;
  font-size: $rem-baseline;
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

.app {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
}
</style>
