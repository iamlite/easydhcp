<template>
  <!--begin::Aside-->
  <div
    id="kt_aside"
    class="aside py-9"
    data-kt-drawer="true"
    data-kt-drawer-name="aside"
    data-kt-drawer-activate="{default: true, lg: false}"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'200px', '300px': '250px'}"
    data-kt-drawer-direction="start"
    data-kt-drawer-toggle="#kt_aside_toggle"
  >
    <!--begin::Aside logo-->
    <div class="aside-logo flex-column-auto px-9 mb-9" id="kt_aside_logo">
      <!--begin::Logo-->
      <router-link to="/dashboard">
        <img
          alt="Logo"
          :src="getAssetPath('media/logos/demo3.svg')"
          class="h-40px logo theme-light-show"
        />
        <img
          alt="Logo"
          :src="getAssetPath('media/logos/demo3-dark.svg')"
          class="h-40px logo theme-dark-show"
        />
      </router-link>
      <!--end::Logo-->
    </div>
    <!--end::Aside logo-->

    <!--begin::Aside menu-->
    <div class="aside-menu flex-column-fluid ps-5 pe-3">
      <KTMenu></KTMenu>
    </div>
    <!--end::Aside menu-->

    <!--begin::Footer-->
    <div class="aside-footer flex-column-auto px-9" id="kt_aside_footer">
      <!--begin::User panel-->
      <div class="d-flex flex-stack">
        <!--begin::Wrapper-->
        <div class="d-flex align-items-center">
          <!--begin::Avatar-->
          <div class="symbol symbol-circle symbol-40px">
            <img :src="getAssetPath('media/avatars/300-1.jpg')" alt="photo" />
          </div>
          <!--end::Avatar-->

          <!--begin::User info-->
          <div class="ms-2">
            <!--begin::Name-->
            <a
              href="#"
              class="text-gray-800 text-hover-primary fs-6 fw-bold lh-1"
              >Tariel Davidashvili</a
            >
            <!--end::Name-->

            <!--begin::Major-->
            <span class="text-muted fw-semobold d-block fs-7 lh-1"
              >Administrator</span
            >
            <!--end::Major-->
          </div>
          <!--end::User info-->
        </div>
        <!--end::Wrapper-->

        <!--begin::User menu-->
        <div class="ms-1">
          <div
            class="btn btn-sm btn-icon btn-active-color-primary position-relative me-n2"
            data-kt-menu-trigger="click"
            data-kt-menu-overflow="true"
            data-kt-menu-placement="top-end"
          >
            <KTIcon icon-name="setting-2" icon-class="fs-1" />
          </div>
          <UserMenu />
        </div>
        <!--end::User menu-->
      </div>
      <!--end::User panel-->
    </div>
    <!--end::Footer-->
  </div>
  <!--end::Aside-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import KTMenu from "@/layouts/main-layout/aside/Menu.vue";
import UserMenu from "@/layouts/main-layout/menus/UserAccountMenu.vue";
import { asideTheme } from "@/core/helpers/config";

export default defineComponent({
  name: "KTAside",
  components: {
    KTMenu,
    UserMenu,
  },
  props: {
    lightLogo: String,
    darkLogo: String,
  },
  setup() {
    const { t } = useI18n();

    return {
      asideTheme,
      t,
      getAssetPath,
    };
  },
});
</script>
