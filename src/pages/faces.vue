<template>
  <div class="faces">
    <div
      v-for="(face, index) in images" :key="index"
      class="face"
    >
      <span
        class="face__text"
        v-text="`Hi, I'm a ${face}`"
      />
      <img
        v-lazy="require(`@/assets/images/lego/${padNumber(index + 1)}-${face}.svg`)"
        :class="[ 'face__image', `face__${face.replace(/\s/g, '-').toLowerCase()}` ]"
        :alt="`Hi, I'm a ${face}`"
      >
    </div>
    <div>
      <p style="margin-bottom: 1rem;">
        Icon made by <a
          href="https://www.flaticon.com/authors/smashicons"
          rel="noopener"
          target="_blank"
          v-text="`Smashicons`"
        /> from
        <a
          href="https://www.flaticon.com"
          rel="noopener"
          target="_blank"
          v-text="`www.flaticon.com`"
        />
      </p>
    </div>
  </div>
</template>

<script>
import { lego } from '@/assets/images.json'
export default {
  name: 'Faces',

  data () {
    return {
      images: lego,
    }
  },

  methods: {
    padNumber (number) {
      var s = String(number)
      while (s.length < 3) { s = '0' + s }
      return s
    },
  },

}
</script>

<style lang="scss">
.faces {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1180px;
}

.face {
  display: flex;
  flex-direction: column;
  width: 5rem;
  align-items: center;
  justify-content: space-between;
  margin: 2rem;

  &__text {
    font-size: .9rem;
    margin-bottom: 1rem;
  }

  &__image {
    width: 2rem;
    height: 2rem;

    &[lazy="loading"] {
      opacity: 1;
      filter: blur(10px);
    }
  }
}
</style>
