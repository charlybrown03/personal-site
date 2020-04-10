<template>
  <div>
    <span
      @click="isDefault = !isDefault"
      v-text="computedText"
    />
  </div>
</template>

<script>
import { computed, ref } from '@vue/composition-api'

const DEFAULT_TEXT = '¿Cómo llegar hasta mí?'

export default {
  name: 'SelectorComponent',

  props: {
    selector: {
      type: String,
      required: true,
    },
  },

  setup (props) {
    const isDefault = ref(true)

    const computedText = computed(() => isDefault.value ? DEFAULT_TEXT : props.selector)

    return { computedText, isDefault }
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
