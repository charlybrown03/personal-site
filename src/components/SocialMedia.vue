<template>
  <div class="social-media">
    <font-awesome-icon :icon="faFacebookF" />
    <font-awesome-icon :icon="faInstagram" />
    <font-awesome-icon :icon="faGithub" />
    <font-awesome-icon :icon="faTwitter" />
    <font-awesome-icon :icon="faLinkedinIn" />
  </div>
</template>

<script>
import {
  faGithub,
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'

export default {
  computed: {
    faGithub() {
      return faGithub
    },
    faFacebookF() {
      return faFacebookF
    },
    faLinkedinIn() {
      return faLinkedinIn
    },
    faInstagram() {
      return faInstagram
    },
    faTwitter() {
      return faTwitter
    }
  }
}
</script>

<style lang="scss">
.fa {
  &-facebook-f {
    color: #3b5999;
  }

  &-instagram {
    color: #e4405f;
  }

  &-twitter {
    color: #55acee;
  }

  &-linkedin-in {
    color: #0077b5;
  }
}
</style>
