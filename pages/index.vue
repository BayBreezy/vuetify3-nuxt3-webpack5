<template>
  <VContainer>
    <!-- Mini drawer on left -->
    <Minidraw />
    <!-- Top app bar -->
    <Topbar />
    <!-- Main drawer left -->
    <Maindrawer />
    <!-- Right nav drawer with nothing -->
    <VNavigationDrawer class="pa-5" v-model="drawer2" location="right">
      <p>Activity</p>
    </VNavigationDrawer>
    <!-- Stats -->
    <VRow>
      <VCol cols="12" sm="4">
        <VCard rounded="lg" class="px-5 py-8 shadow" flat>
          <p class="text-medium-emphasis text-body-2 mb-3">Total products</p>
          <p class="text-h4 font-weight-bold">2,678</p>
        </VCard>
      </VCol>
      <VCol cols="12" sm="4">
        <VCard rounded="lg" class="px-5 py-8 shadow" flat>
          <p class="text-medium-emphasis text-body-2 mb-3">Total customers</p>
          <p class="text-h4 font-weight-bold">678</p>
        </VCard>
      </VCol>
      <VCol cols="12" sm="4">
        <VCard rounded="lg" class="px-5 py-8 shadow" flat>
          <p class="text-medium-emphasis text-body-2 mb-3">Total orders</p>
          <p class="text-h4 font-weight-bold">16,678</p>
        </VCard>
      </VCol>
    </VRow>
    <VCard rounded="lg" flat class="mt-10 shadow">
      <VCardTitle class="text-h6 font-weight-bold">Profit & Loss</VCardTitle>
      <VCardSubtitle>Profit & loss over the last nine months </VCardSubtitle>
      <Chart />
    </VCard>
  </VContainer>
</template>

<script setup lang="ts">
const drawer2 = useState<boolean | undefined | null>("drawer2");
</script>
