<script setup>
import PersonalData from '@/components/PersonalData.vue'
import SocialMedia from '@/components/SocialMedia.vue'

useHead({
  title: 'Carlos Moreno Villodre'
})
useSeoMeta({
  description: 'Personal Website'
})
</script>

<template>
  <div class="container">
    <personal-data />
    <social-media />
  </div>
</template>

<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  margin-top: 1.5rem;
  align-items: center;
}
</style>
