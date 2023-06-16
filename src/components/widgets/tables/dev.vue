<template>
  <!--begin::Tables Widget 13-->
  <div :class="widgetClasses" class="card">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bold fs-3 mb-1">Device List</span>
        <span class="text-muted mt-1 fw-semobold fs-7"
          >Current lease information</span
        >
      </h3>
      <div class="card-toolbar">
        <!--begin::Menu-->
        <button
          type="button"
          class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
          data-kt-menu-trigger="click"
          data-kt-menu-placement="bottom-end"
          data-kt-menu-flip="top-end"
        >
          <KTIcon icon-name="category" icon-class="fs-2" />
        </button>
        <Dropdown2></Dropdown2>
        <!--end::Menu-->
      </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body py-3">
      <!--begin::Table container-->
      <div class="table-responsive">
        <!--begin::Table-->
        <table
          class="table table-hover table-row-dashed table-row-gray-100 align-middle gs-0 gy-3"
        >
          <!--begin::Table head-->
          <thead>
            <tr class="fw-bold text-muted">
              <th class="w-25px">
                <div
                  class="form-check form-check-sm form-check-custom form-check-solid"
                >
                  <input
                    class="form-check-input"
                    type="checkbox"
                    @change="
                      checkedRows.length === list.length
                        ? (checkedRows.length = 0)
                        : (checkedRows = list.map((_, i) => i))
                    "
                  />
                </div>
              </th>
              <th class="min-w-150px">Name</th>
              <th class="min-w-150px">Hostname</th>
              <th class="min-w-150px">IP Address</th>
              <th class="min-w-140px">MAC Address</th>
              <th class="min-w-120px">Lease Time</th>
              <th class="min-w-120px">Actions</th>
            </tr>
          </thead>
          <!--end::Table head-->

          <!--begin::Table body-->
          <tbody>
            <template v-for="(item, index) in list" :key="index">
              <tr>
                <td>
                  <div
                    class="form-check form-check-sm form-check-custom form-check-solid"
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :value="index"
                      v-model="checkedRows"
                    />
                  </div>
                </td>
                <td>
                  <a
                    href="#"
                    class="text-dark fw-bold text-hover-primary fs-6"
                    >{{ item.name }}</a
                  >
                </td>
                <td>
                  <a
                    href="#"
                    class="text-dark fw-bold text-hover-primary d-block mb-1 fs-6"
                    >{{ item.hostname }}</a
                  >
                </td>
                <td>
                  <a
                    href="#"
                    class="text-dark fw-bold text-hover-primary d-block mb-1 fs-6"
                    >{{ item.ip }}</a
                  >
                </td>
                <td>
                  <a
                    href="#"
                    class="text-dark fw-bold text-hover-primary d-block mb-1 fs-6"
                    >{{ item.mac }}</a
                  >
                </td>
                <td>
                  <a
                    href="#"
                    class="text-dark fw-bold text-hover-primary d-block mb-1 fs-6"
                    >{{ item.leaseStart }}</a
                  >
                  <span class="text-muted fw-semobold text-muted d-block fs-7"
                    >End: {{ item.leaseEnd }}</span
                  >
                </td>
                <td class="text-end">
                  <a
                    href="#"
                    class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                  >
                    <KTIcon icon-name="switch" icon-class="fs-3" />
                  </a>

                  <a
                    href="#"
                    class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                  >
                    <KTIcon icon-name="pencil" icon-class="fs-3" />
                  </a>

                  <a
                    href="#"
                    class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                  >
                    <KTIcon icon-name="trash" icon-class="fs-3" />
                  </a>
                </td>
              </tr>
            </template>
          </tbody>
          <!--end::Table body-->
        </table>
        <!--end::Table-->
      </div>
      <!--end::Table container-->
    </div>
    <!--begin::Body-->
  </div>
  <!--end::Tables Widget 13-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, ref } from "vue";
import Dropdown2 from "@/components/dropdown/Dropdown2.vue";

export default defineComponent({
  name: "kt-widget-12",
  components: {
    Dropdown2,
  },
  props: {
    widgetClasses: String,
  },
  setup() {
    const checkedRows = ref<Array<number>>([]);
    const list = [
      {
        name: "Roberts Iphone 12 Pro Max",
        hostname: "19216812",
        ip: "192.168.1.2",
        mac: "00:0a:95:9d:68:16",
        leaseStart: "2023-06-15 08:00:00",
        leaseEnd: "2023-06-16 08:00:00",
      },
      {
        name: "Lindas Samsung Galaxy S5",
        hostname: "19216813",
        ip: "192.168.1.3",
        mac: "00:0a:95:9d:68:17",
        leaseStart: "2023-06-15 08:05:00",
        leaseEnd: "2023-06-16 08:05:00",
      },
      {
        name: "Living Room TV",
        hostname: "19216814",
        ip: "192.168.1.4",
        mac: "00:0a:95:9d:68:18",
        leaseStart: "2023-06-15 08:10:00",
        leaseEnd: "2023-06-16 08:10:00",
      },
    ];

    return {
      list,
      checkedRows,
      getAssetPath,
    };
  },
});
</script>
