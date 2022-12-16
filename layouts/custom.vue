<template>
    <div>
      <Title>{{ title }}</Title>
      <slot />

      <section>
        <div v-if="$device.isDesktop">
          Desktop
        </div>
        <div v-else-if="$device.isTablet">
          Tablet
        </div>
        <div v-else>
          Mobile
        </div>
      </section>
    </div>
  </template>
  <script setup>
  const title = useState('title', () => 'MarketPlace')
  const { isMobile } = useDevice();
  </script>
  
  <style>
  .router-link-active {
    font-weight: bold;
  }
  </style>