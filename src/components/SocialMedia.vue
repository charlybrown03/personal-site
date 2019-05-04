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
import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

export default {
  computed: {
    icons () {
      return [
        {
          href: 'https://www.facebook.com/cmorenovillodre',
          icon: faFacebookF,
          alt: 'Facebook',
          gtmTag: 'facebook',
        },
        {
          href: 'https://www.instagram.com/charlybrown_03/',
          icon: faInstagram,
          alt: 'Instagram',
          gtmTag: 'instagram',
        },
        {
          href: 'https://github.com/charlybrown03/',
          icon: faGithub,
          alt: 'Github',
          gtmTag: 'github',
        },
        {
          href: 'https://twitter.com/charly_brown_03',
          icon: faTwitter,
          alt: 'Twitter',
          gtmTag: 'twitter',
        },
        {
          href: 'https://www.linkedin.com/in/carlos-moreno-villodre-106936125/',
          icon: faLinkedinIn,
          alt: 'LinkenIn',
          gtmTag: 'linkedin',
        },
      ]
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
    color: $color-chambray;
  }

  &-instagram {
    color: $color-cerise-red;
  }

  &-github {
    color: $color-black;
  }

  &-twitter {
    color: $color-picton-blue;
  }

  &-linkedin-in {
    color: $color-deep-cerulean;
  }
}
</style>
