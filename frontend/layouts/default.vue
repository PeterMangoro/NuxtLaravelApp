<template>
  <div>
    <UHorizontalNavigation
      :links="links"
      class="border-b border-gray-200 dark:border-gray-800"
    />
    <UContainer
        as="main"
        class="min-h-screen mx-auto flex-grow py-4 sm:py-7 flex flex-col max-w-screen-xl"
      >
        <slot  />
      </UContainer>
     
      <NuxtLoadingIndicator class="!opacity-100" :throttle="0" />

      <UNotifications :timeout="1000">
        <template #title="{ title }">
          <span v-html="title" />
        </template>
        <template #description="{ description }">
          <span v-html="description" />
        </template>
      </UNotifications>
  </div>

</template>

<script setup>
const links = [
  [
    {
      label: "Home",
      icon: "i-heroicons-home",
      to: "/",
    },
    {
      label: "Users",
      icon: "i-heroicons-chart-bar",
      to: "/users",
    },
    {
      label: "Command Palette",
      icon: "i-heroicons-command-line",
      to: "/",
    },
  ],
  [
    {
      label: "Examples",
      icon: "i-heroicons-light-bulb",
    },
    {
      label: "Help",
      icon: "i-heroicons-question-mark-circle",
    },
  ],
];
</script>

<style>
</style>