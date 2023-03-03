<template>
  <VNavigationDrawer rail>
    <VList class="mt-16 pt-11">
      <template v-for="(r, i) in railNav" :key="`railItem-${i}`">
        <v-tooltip :text="r.title">
          <template v-slot:activator="{ props }">
            <VListItem v-bind="props" link class="mb-1">
              <template #prepend>
                <VIcon size="20" :icon="r.icon" />
              </template>
            </VListItem>
          </template>
        </v-tooltip>
      </template>
      <v-tooltip text="Change theme">
        <template v-slot:activator="{ props }">
          <VListItem
            @click="
              toggleTheme();
              playCork();
            "
            v-bind="props"
          >
            <template #prepend>
              <VIcon size="20" :icon="themeIcon" />
            </template>
          </VListItem>
        </template>
      </v-tooltip>
    </VList>
  </VNavigationDrawer>
  <VBottomNavigation height="70" grow v-if="$vuetify.display.mobile">
    <template v-for="(r, i) in railNav.slice(0, 3)" :key="`railItem-${i}`">
      <VBtn>
        <VIcon size="24" :icon="r.icon" />
        <span
          class="font-weight-light d-inline-block mt-2"
          style="font-size: 10px"
          >{{ r.title }}</span
        >
      </VBtn>
    </template>
    <VBtn
      @click="
        toggleTheme();
        playCork();
      "
    >
      <VIcon size="24" :icon="themeIcon" />
      <span
        class="font-weight-light d-inline-block mt-2"
        style="font-size: 10px"
        >{{ $vuetify.theme.current.dark ? "Light" : "Dark" }}</span
      >
    </VBtn>
  </VBottomNavigation>
</template>

<script setup lang="ts">
import { useTheme } from "vuetify";
import { useSound } from "@vueuse/sound";

const theme = useTheme();

// Used to toggle between light and dark themes
const toggleTheme = () =>
  (theme.global.name.value =
    theme.global.name.value == BLUE_THEME ? "light" : BLUE_THEME);

// used to toggle between sun and moon icons based on theme
const themeIcon = computed(() => {
  return theme.global.name.value == BLUE_THEME
    ? "heroicons:sun"
    : "heroicons:moon";
});
const railNav = [
  { title: "Home", icon: "heroicons:home", to: "/" },
  { title: "About", icon: "heroicons:information-circle", to: "/" },
  { title: "Contact", icon: "heroicons:phone", to: "/" },
  { title: "Login", icon: "heroicons:computer-desktop", to: "/" },
  { title: "Register", icon: "heroicons:user", to: "/" },
];

// Not needed but it's fun to have.. this will get annoying 😁
const { play: playCork } = useSound("/sounds/cork.mp3");
</script>
