<script setup>
const title = 'Carlos Moreno Villodre'
const subtitle = 'Frontend Developer'
</script>

<template>
  <div class="personal-data">
    <picture>
      <source srcset="~/assets/images/profile.webp" type="image/webp">
      <source srcset="~/assets/images/profile.jpeg" type="image/jpeg">
      <img
        src="~/assets/images/profile.jpeg"
        class="personal-data__image"
        alt="Personal image"
      >
    </picture>
    <h1 class="personal-data__title">
      {{ title }}
    </h1>
    <h2 class="personal-data__subtitle">
      {{ subtitle }}
    </h2>
  </div>
</template>

<style lang="scss">
.personal-data {
  width: 100%;

  &__image {
    border-radius: 100%;
    width: 75%;
    max-width: 250px;
  }

  &__title,
  &__subtitle {
    margin: 1rem 0;
  }
}
</style>
