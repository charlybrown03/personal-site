<template>
  <div class="social-media">
    <a
      v-for="(icon, index) in icons"
      :key="index"
      :aria-label="icon.alt"
      :href="icon.href"
      target="_blank"
      rel="noopener"
      @click="onClickLink(icon.eventLabel)"
    >
      <font-awesome-icon
        class="fa-3x"
        :icon="icon.icon"
      />
    </a>
  </div>
</template>

<script>
import icons from './socialIcons.json'

export default {
  data () {
    return { icons }
  },

  methods: {
    onClickLink (eventLabel) {
      this.$gtm.pushEvent({
        event: 'gaEvent',
        eventAction: 'Click Link',
        eventCategory: 'Social Link',
        eventLabel,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.social-media {
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  max-width: 500px;
  margin-top: 1.5rem;
  width: 100%;
}

.fa {
  &-facebook-f {
    @include icon-mixin($color-chambray);
  }

  &-instagram {
    @include icon-mixin($color-cerise-red);
  }

  &-github {
    @include icon-mixin($color-black);
  }

  &-twitter {
    @include icon-mixin($color-picton-blue);
  }

  &-linkedin-in {
    @include icon-mixin($color-deep-cerulean);
  }
}
</style>
