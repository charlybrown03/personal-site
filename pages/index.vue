<template>
  <section class="container">
    <font-awesome-icon :icon="faGithub" />
    <font-awesome-icon :icon="faFacebook" />
    <font-awesome-icon :icon="faLinkedin" />
    <font-awesome-icon :icon="faInstagram" />
    <font-awesome-icon :icon="faTwitter" />
  </section>
</template>

<script>
import {
  faGithub,
  faFacebook,
  faLinkedin,
  faInstagram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'

export default {
  computed: {
    faGithub() {
      return faGithub
    },
    faFacebook() {
      return faFacebook
    },
    faLinkedin() {
      return faLinkedin
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

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
