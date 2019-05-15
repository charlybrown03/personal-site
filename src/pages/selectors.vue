<template>
  <div class="selectors">
    <div class="gtm__1">
      <selector-component
        class="gtm__2"
        :selector="'.gtm__1 .gtm__2 o .gtm__1 > .gtm__2'"
      />
    </div>
    <div class="gtm__1">
      <div class="gtm__3">
        <selector-component
          class="gtm__2"
          :selector="'.gtm__1 .gtm__2 o .gtm__3 > .gtm__2 o .gtm__1 .gtm__3 > .gtm__2'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SelectorComponent from '@/components/SelectorComponent'

export default {
  name: 'Selectors',

  components: {
    SelectorComponent,
  },
}
</script>

<style lang="scss" scoped>
  .selectors {
    display: flex;
  }
</style>
