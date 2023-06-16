<template>
  <deviceslist widget-classes="mb-5 mb-xl-10" />
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
import LayoutService from "@/core/services/LayoutService";
import deviceslist from "@/components/widgets/tables/deviceslist.vue";
import { LS_CONFIG_NAME_KEY } from "@/stores/config";

export default defineComponent({
  name: "dashboard",
  components: {
    deviceslist,
  },
  setup() {
    onMounted(() => {
      if (!localStorage.getItem(LS_CONFIG_NAME_KEY)) {
        LayoutService.enableSidebar();
      }
    });

    onUnmounted(() => {
      if (!localStorage.getItem(LS_CONFIG_NAME_KEY)) {
        LayoutService.disableSidebar();
      }
    });
  },
});
</script>
