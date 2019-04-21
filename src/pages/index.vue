<template>
  <section class="container">
    <personal-data />
    <social-media />
  </section>
</template>

<script>
import PersonalData from '@/components/PersonalData'
import SocialMedia from '@/components/SocialMedia'

export default {
  components: {
    PersonalData,
    SocialMedia,
  },

  nuxtI18n: {
    paths: {
      es: '/',
    },
  },
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  margin-top: 1.5rem;
  align-items: center;
}
</style>
