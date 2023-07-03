<script setup>
import {
  mdiFacebook,
  mdiGithub,
  mdiInstagram,
  mdiLinkedin,
  mdiTwitter
} from '@mdi/js'

const icons = [
  {
    ariaLabel: 'Facebook',
    color: '#3b5999',
    href: 'https://www.facebook.com/cmorenovillodre',
    icon: mdiFacebook
  },
  {
    ariaLabel: 'Instagram',
    color: '#e4405f',
    href: 'https://www.instagram.com/charlybrown_03/',
    icon: mdiInstagram
  },
  {
    ariaLabel: 'Github',
    color: '#000000',
    href: 'https://github.com/charlybrown03/',
    icon: mdiGithub
  },
  {
    ariaLabel: 'Twitter',
    color: '#55acee',
    href: 'https://twitter.com/charly_brown_03',
    icon: mdiTwitter
  },
  {
    ariaLabel: 'LinkenIn',
    color: '#0077b5',
    href: 'https://www.linkedin.com/in/carlos-moreno-villodre-106936125/',
    icon: mdiLinkedin
  }
]
</script>

<template>
  <div class="social-media">
    <a
      v-for="item in icons"
      :key="item.icon"
      :aria-label="item.ariaLabel"
      :href="item.href"
      target="_blank"
      rel="noopener"
    >
      <svg class="social-media__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path :fill="item.color" :d="item.icon" />
      </svg>
    </a>
  </div>
</template>

<style lang="scss">
.social-media {
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  max-width: 500px;
  margin-top: 1.5rem;
  width: 100%;

  &__icon {
    transition: opacity 0.3s ease;
    width: 3em;

    &:hover,
    &:focus,
    &:active {
      opacity: .7;
    }
  }
}
</style>
