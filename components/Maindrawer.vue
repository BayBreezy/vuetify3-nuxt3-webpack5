<template>
  <VNavigationDrawer v-model="drawer1">
    <VList>
      <VListSubheader>General</VListSubheader>
      <template v-for="(m, i) in mainMenu" :key="`mainMenu${i}`">
        <VListItem class="mx-2 rounded-lg" link>
          <template #prepend>
            <VIcon size="20" class="mr-5" :icon="m.icon"></VIcon>
          </template>
          <VListItemTitle class="font-weight-medium text-body-2">{{
            m.title
          }}</VListItemTitle>
        </VListItem>
      </template>
    </VList>
    <!-- Logout -->
    <template #append>
      <VList>
        <VListItem class="mx-2 rounded-lg" link>
          <template #prepend>
            <VIcon
              size="20"
              class="mr-5"
              icon="heroicons:arrow-right-on-rectangle"
            ></VIcon>
          </template>
          <VListItemTitle class="font-weight-medium text-body-2"
            >Logout</VListItemTitle
          >
        </VListItem>
      </VList>
    </template>
  </VNavigationDrawer>
</template>

<script setup lang="ts">
const mainMenu = [
  { title: "Dashboard", icon: "heroicons:squares-2x2" },
  { title: "Products", icon: "heroicons:archive-box" },
  { title: "Customers", icon: "heroicons:users" },
  { title: "Orders", icon: "heroicons:rectangle-group" },
  { title: "Reports", icon: "heroicons:chart-bar" },
  { title: "Integrations", icon: "heroicons:command-line" },
  { title: "Settings", icon: "heroicons:adjustments-vertical" },
  { title: "Help", icon: "heroicons:question-mark-circle" },
];

// global drawer state
const drawer1 = useState<boolean | undefined | null>("drawer1");
</script>

<style scoped></style>
