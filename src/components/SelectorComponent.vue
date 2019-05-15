<template>
  <div>
    <span
      @click="isDefault = !isDefault"
      v-text="computedText"
    />
  </div>
</template>

<script>
export default {
  name: 'SelectorComponent',

  props: {
    selector: {
      type: String,
      required: true,
    },
  },

  data () {
    return {
      defaultText: '¿Cómo llegar hasta mí?',
      isDefault: true,
    }
  },

  computed: {
    computedText () {
      return this.isDefault ? this.defaultText : this.selector
    },
  },
}
</script>

<style scoped>
  span {
    display: block;
    cursor: pointer;
    padding: 1rem;
  }
</style>
