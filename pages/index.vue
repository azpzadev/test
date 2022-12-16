<template>
    <div>
        <NuxtLayout :name="custom">
            <Head>
                <Title>Index | {{ title }}</Title>
                <Meta name="description" content="My app description"/>
            </Head>
              <h1 class="bg-red-500 text-yellow-500 text-3xl font-bold underline">
                Heading 1
              </h1>
              <div class="max-w-5xl bg-green-600">dddd</div>
        </NuxtLayout>
    </div>

  </template>
  <script setup>
  const title = useState('title')
definePageMeta({
  layout: "custom",
});
  </script>