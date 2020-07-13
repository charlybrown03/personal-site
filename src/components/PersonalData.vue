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
    <h1 class="personal-data__title" v-text="$t('title')" />
    <h2 class="personal-data__subtitle" v-text="$t('subtitle')" />
  </div>
</template>

<script>
export default {
  name: 'PersonalData',
}
</script>

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

<i18n lang="json5">
{
  es: {
    title: "Carlos Moreno Villodre",
    subtitle: "Frontend Developer",
    icons: [
      {
        alt: "Facebook",
      },
      {
        alt: "Instagram",
      },
      {
        alt: "Github",
      },
      {
        alt: "Twitter",
      },
      {
        alt: "LinkenIn",
      }
    ]
  }
}
</i18n>
