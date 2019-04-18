<template>
  <div class="personal-data">
    <img
      src="~/assets/images/profile.jpeg"
      class="personal-data__image"
      alt="Personal image"
    >
    <h1 class="personal-data__title" v-text="'Carlos Moreno Villodre'" />
    <h2 class="personal-data__subtitle" v-text="'FrontEnd Developer'" />
  </div>
</template>

<script>
export default {
  name: 'PersonalData',
}
</script>

<style lang="scss" scoped>
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
