<template>
  <VAppBar flat class="shadow">
    <v-tooltip
      location="bottom"
      :text="drawer1 ? 'Close sidebar' : 'Open sidebar'"
    >
      <template v-slot:activator="{ props }">
        <VAppBarNavIcon
          v-bind="props"
          @click="
            drawer1 = !drawer1;
            play();
          "
        >
          <VIcon>heroicons:bars-2</VIcon>
        </VAppBarNavIcon>
      </template>
    </v-tooltip>
    <VToolbarTitle class="font-weight-medium text-body-1"
      >Welcome back, John</VToolbarTitle
    >
    <VSpacer />
    <!-- User avatar with dropdown -->
    <VBtn @click="playDing()" id="profile-activator" icon flat class="mr-5">
      <VAvatar size="35">
        <VImg
          src="https://ui-avatars.com/api/?name=John+Doe&background=60a5fa&color=fff"
        ></VImg>
      </VAvatar>
    </VBtn>
    <VMenu width="200" location="bottom left" activator="#profile-activator">
      <VList class="shadow">
        <VListItem
          class="mx-2 rounded-lg"
          link
          v-for="(p, i) in profileMenu"
          :key="i"
        >
          <template #prepend>
            <VIcon size="18" class="mr-5" :icon="p.icon"></VIcon>
          </template>
          <VListItemTitle class="text-body-2">{{ p.title }}</VListItemTitle>
        </VListItem>
      </VList>
    </VMenu>
    <v-tooltip
      location="bottom"
      :text="drawer2 ? 'Close sidebar' : 'Open sidebar'"
    >
      <template v-slot:activator="{ props }">
        <VAppBarNavIcon
          v-bind="props"
          @click="
            drawer2 = !drawer2;
            pageTurn();
          "
        >
          <VIcon>heroicons:ellipsis-vertical</VIcon>
        </VAppBarNavIcon>
      </template>
    </v-tooltip>
  </VAppBar>
</template>

<script setup lang="ts">
import { useSound } from "@vueuse/sound";
const profileMenu = [
  { title: "Profile", icon: "heroicons:user" },
  { title: "Settings", icon: "heroicons:cog-6-tooth" },
  { title: "Logout", icon: "heroicons:arrow-right-on-rectangle" },
];

// global drawer state
const drawer1 = useState<boolean | undefined | null>("drawer1");
const drawer2 = useState<boolean | undefined | null>("drawer2");

// Not needed but it's fun to have.. this will get annoying 😁
const { play } = useSound("/sounds/flipcard.mp3");
const { play: pageTurn } = useSound("/sounds/pageturn.mp3");
const { play: playDing } = useSound("/sounds/ding.mp3");
</script>
