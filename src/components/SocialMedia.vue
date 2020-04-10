<template>
  <div class="social-media">
    <a
      v-for="(icon, index) in icons"
      :key="index"
      :aria-label="icon.alt"
      :href="icon.href"
      target="_blank"
      rel="noopener"
      :class="`gtm_${icon.gtmTag}`"
    >
      <font-awesome-icon
        class="fa-3x"
        :icon="icon.icon"
      />
    </a>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

const ICONS = [
  {
    href: 'https://www.facebook.com/cmorenovillodre',
    icon: [ 'fab', 'facebook-f' ],
    alt: 'Facebook',
    gtmTag: 'facebook',
  },
  {
    href: 'https://www.instagram.com/charlybrown_03/',
    icon: [ 'fab', 'instagram' ],
    alt: 'Instagram',
    gtmTag: 'instagram',
  },
  {
    href: 'https://github.com/charlybrown03/',
    icon: [ 'fab', 'github' ],
    alt: 'Github',
    gtmTag: 'github',
  },
  {
    href: 'https://twitter.com/charly_brown_03',
    icon: [ 'fab', 'twitter' ],
    alt: 'Twitter',
    gtmTag: 'twitter',
  },
  {
    href: 'https://www.linkedin.com/in/carlos-moreno-villodre-106936125/',
    icon: [ 'fab', 'linkedin-in' ],
    alt: 'LinkenIn',
    gtmTag: 'linkedin',
  },
]

export default {
  setup () {
    const icons = ref(ICONS)

    return { icons }
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
