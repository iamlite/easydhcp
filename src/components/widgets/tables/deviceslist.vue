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
      {
        name: "Kitchen Smart Fridge",
        hostname: "19216815",
        ip: "192.168.1.5",
        mac: "00:0a:95:9d:68:19",
        leaseStart: "2023-06-15 08:15:00",
        leaseEnd: "2023-06-16 08:15:00",
      },
      {
        name: "Home Security System",
        hostname: "19216816",
        ip: "192.168.1.6",
        mac: "00:0a:95:9d:68:20",
        leaseStart: "2023-06-15 08:20:00",
        leaseEnd: "2023-06-16 08:20:00",
      },
      {
        name: "Smart Thermostat",
        hostname: "19216817",
        ip: "192.168.1.7",
        mac: "00:0a:95:9d:68:21",
        leaseStart: "2023-06-15 08:25:00",
        leaseEnd: "2023-06-16 08:25:00",
      },
      {
        name: "Bedroom Lamp",
        hostname: "19216818",
        ip: "192.168.1.8",
        mac: "00:0a:95:9d:68:22",
        leaseStart: "2023-06-15 08:30:00",
        leaseEnd: "2023-06-16 08:30:00",
      },
      {
        name: "Study Room Desktop PC",
        hostname: "19216819",
        ip: "192.168.1.9",
        mac: "00:0a:95:9d:68:23",
        leaseStart: "2023-06-15 08:35:00",
        leaseEnd: "2023-06-16 08:35:00",
      },
      {
        name: "Alexa Voice Assistant",
        hostname: "19216820",
        ip: "192.168.1.10",
        mac: "00:0a:95:9d:68:24",
        leaseStart: "2023-06-15 08:40:00",
        leaseEnd: "2023-06-16 08:40:00",
      },
      {
        name: "Gaming Console",
        hostname: "19216821",
        ip: "192.168.1.11",
        mac: "00:0a:95:9d:68:25",
        leaseStart: "2023-06-15 08:45:00",
        leaseEnd: "2023-06-16 08:45:00",
      },
      {
        name: "Smart Doorbell",
        hostname: "19216822",
        ip: "192.168.1.12",
        mac: "00:0a:95:9d:68:26",
        leaseStart: "2023-06-15 08:50:00",
        leaseEnd: "2023-06-16 08:50:00",
      },
      {
        name: "Guest Room Tablet",
        hostname: "19216823",
        ip: "192.168.1.13",
        mac: "00:0a:95:9d:68:27",
        leaseStart: "2023-06-15 08:55:00",
        leaseEnd: "2023-06-16 08:55:00",
      },
      {
        name: "Smart Speaker",
        hostname: "19216824",
        ip: "192.168.1.14",
        mac: "00:0a:95:9d:68:28",
        leaseStart: "2023-06-15 09:00:00",
        leaseEnd: "2023-06-16 09:00:00",
      },
      {
        name: "Children's Tablet",
        hostname: "19216825",
        ip: "192.168.1.15",
        mac: "00:0a:95:9d:68:29",
        leaseStart: "2023-06-15 09:05:00",
        leaseEnd: "2023-06-16 09:05:00",
      },
      {
        name: "Media Server",
        hostname: "19216826",
        ip: "192.168.1.16",
        mac: "00:0a:95:9d:68:30",
        leaseStart: "2023-06-15 09:10:00",
        leaseEnd: "2023-06-16 09:10:00",
      },
      {
        name: "Printer",
        hostname: "19216827",
        ip: "192.168.1.17",
        mac: "00:0a:95:9d:68:31",
        leaseStart: "2023-06-15 09:15:00",
        leaseEnd: "2023-06-16 09:15:00",
      },
      {
        name: "Wireless Access Point",
        hostname: "19216828",
        ip: "192.168.1.18",
        mac: "00:0a:95:9d:68:32",
        leaseStart: "2023-06-15 09:20:00",
        leaseEnd: "2023-06-16 09:20:00",
      },
      {
        name: "Smart Vacuum Cleaner",
        hostname: "19216829",
        ip: "192.168.1.19",
        mac: "00:0a:95:9d:68:33",
        leaseStart: "2023-06-15 09:25:00",
        leaseEnd: "2023-06-16 09:25:00",
      },
      {
        name: "Family Desktop PC",
        hostname: "19216830",
        ip: "192.168.1.20",
        mac: "00:0a:95:9d:68:34",
        leaseStart: "2023-06-15 09:30:00",
        leaseEnd: "2023-06-16 09:30:00",
      },
      {
        name: "Smart Mirror",
        hostname: "19216831",
        ip: "192.168.1.21",
        mac: "00:0a:95:9d:68:35",
        leaseStart: "2023-06-15 09:35:00",
        leaseEnd: "2023-06-16 09:35:00",
      },
      {
        name: "Security Camera 1",
        hostname: "19216832",
        ip: "192.168.1.22",
        mac: "00:0a:95:9d:68:36",
        leaseStart: "2023-06-15 09:40:00",
        leaseEnd: "2023-06-16 09:40:00",
      },
      {
        name: "Security Camera 2",
        hostname: "19216833",
        ip: "192.168.1.23",
        mac: "00:0a:95:9d:68:37",
        leaseStart: "2023-06-15 09:45:00",
        leaseEnd: "2023-06-16 09:45:00",
      },
      {
        name: "Network Attached Storage",
        hostname: "19216834",
        ip: "192.168.1.24",
        mac: "00:0a:95:9d:68:38",
        leaseStart: "2023-06-15 09:50:00",
        leaseEnd: "2023-06-16 09:50:00",
      },
      {
        name: "Smart Lock",
        hostname: "19216835",
        ip: "192.168.1.25",
        mac: "00:0a:95:9d:68:39",
        leaseStart: "2023-06-15 09:55:00",
        leaseEnd: "2023-06-16 09:55:00",
      },
      {
        name: "Smart Bulb 1",
        hostname: "19216836",
        ip: "192.168.1.26",
        mac: "00:0a:95:9d:68:40",
        leaseStart: "2023-06-15 10:00:00",
        leaseEnd: "2023-06-16 10:00:00",
      },
      {
        name: "Smart Bulb 2",
        hostname: "19216837",
        ip: "192.168.1.27",
        mac: "00:0a:95:9d:68:41",
        leaseStart: "2023-06-15 10:05:00",
        leaseEnd: "2023-06-16 10:05:00",
      },
      {
        name: "Smart Blinds",
        hostname: "19216838",
        ip: "192.168.1.28",
        mac: "00:0a:95:9d:68:42",
        leaseStart: "2023-06-15 10:10:00",
        leaseEnd: "2023-06-16 10:10:00",
      },
      {
        name: "Smart Scale",
        hostname: "19216839",
        ip: "192.168.1.29",
        mac: "00:0a:95:9d:68:43",
        leaseStart: "2023-06-15 10:15:00",
        leaseEnd: "2023-06-16 10:15:00",
      },
      {
        name: "Wireless Speaker",
        hostname: "19216840",
        ip: "192.168.1.30",
        mac: "00:0a:95:9d:68:44",
        leaseStart: "2023-06-15 10:20:00",
        leaseEnd: "2023-06-16 10:20:00",
      },
      {
        name: "Smart Microwave",
        hostname: "19216841",
        ip: "192.168.1.31",
        mac: "00:0a:95:9d:68:45",
        leaseStart: "2023-06-15 10:25:00",
        leaseEnd: "2023-06-16 10:25:00",
      },
      {
        name: "Smart Coffee Maker",
        hostname: "19216842",
        ip: "192.168.1.32",
        mac: "00:0a:95:9d:68:46",
        leaseStart: "2023-06-15 10:30:00",
        leaseEnd: "2023-06-16 10:30:00",
      },
      {
        name: "Baby Monitor",
        hostname: "19216843",
        ip: "192.168.1.33",
        mac: "00:0a:95:9d:68:47",
        leaseStart: "2023-06-15 10:35:00",
        leaseEnd: "2023-06-16 10:35:00",
      },
      {
        name: "Smart Watering System",
        hostname: "19216844",
        ip: "192.168.1.34",
        mac: "00:0a:95:9d:68:48",
        leaseStart: "2023-06-15 10:40:00",
        leaseEnd: "2023-06-16 10:40:00",
      },
      {
        name: "Home Theater System",
        hostname: "19216845",
        ip: "192.168.1.35",
        mac: "00:0a:95:9d:68:49",
        leaseStart: "2023-06-15 10:45:00",
        leaseEnd: "2023-06-16 10:45:00",
      },
      {
        name: "Smart Washer",
        hostname: "19216846",
        ip: "192.168.1.36",
        mac: "00:0a:95:9d:68:50",
        leaseStart: "2023-06-15 10:50:00",
        leaseEnd: "2023-06-16 10:50:00",
      },
      {
        name: "Smart Dryer",
        hostname: "19216847",
        ip: "192.168.1.37",
        mac: "00:0a:95:9d:68:51",
        leaseStart: "2023-06-15 10:55:00",
        leaseEnd: "2023-06-16 10:55:00",
      },
      {
        name: "Smart Garage Door Opener",
        hostname: "19216848",
        ip: "192.168.1.38",
        mac: "00:0a:95:9d:68:52",
        leaseStart: "2023-06-15 11:00:00",
        leaseEnd: "2023-06-16 11:00:00",
      },
      {
        name: "Smart Air Purifier",
        hostname: "19216849",
        ip: "192.168.1.39",
        mac: "00:0a:95:9d:68:53",
        leaseStart: "2023-06-15 11:05:00",
        leaseEnd: "2023-06-16 11:05:00",
      },
      {
        name: "Home Office Printer",
        hostname: "19216850",
        ip: "192.168.1.40",
        mac: "00:0a:95:9d:68:54",
        leaseStart: "2023-06-15 11:10:00",
        leaseEnd: "2023-06-16 11:10:00",
      },
      {
        name: "Smart Exercise Bike",
        hostname: "19216851",
        ip: "192.168.1.41",
        mac: "00:0a:95:9d:68:55",
        leaseStart: "2023-06-15 11:15:00",
        leaseEnd: "2023-06-16 11:15:00",
      },
      {
        name: "Smart TV Box",
        hostname: "19216852",
        ip: "192.168.1.42",
        mac: "00:0a:95:9d:68:56",
        leaseStart: "2023-06-15 11:20:00",
        leaseEnd: "2023-06-16 11:20:00",
      },
      {
        name: "Smart Ceiling Fan",
        hostname: "19216853",
        ip: "192.168.1.43",
        mac: "00:0a:95:9d:68:57",
        leaseStart: "2023-06-15 11:25:00",
        leaseEnd: "2023-06-16 11:25:00",
      },
      {
        name: "Smart Pet Feeder",
        hostname: "19216854",
        ip: "192.168.1.44",
        mac: "00:0a:95:9d:68:58",
        leaseStart: "2023-06-15 11:30:00",
        leaseEnd: "2023-06-16 11:30:00",
      },
      {
        name: "Smart Plant Monitor",
        hostname: "19216855",
        ip: "192.168.1.45",
        mac: "00:0a:95:9d:68:59",
        leaseStart: "2023-06-15 11:35:00",
        leaseEnd: "2023-06-16 11:35:00",
      },
      {
        name: "Smart Picture Frame",
        hostname: "19216856",
        ip: "192.168.1.46",
        mac: "00:0a:95:9d:68:60",
        leaseStart: "2023-06-15 11:40:00",
        leaseEnd: "2023-06-16 11:40:00",
      },
      {
        name: "Smart Mirror",
        hostname: "19216857",
        ip: "192.168.1.47",
        mac: "00:0a:95:9d:68:61",
        leaseStart: "2023-06-15 11:45:00",
        leaseEnd: "2023-06-16 11:45:00",
      },
      {
        name: "Smart Robot Vacuum",
        hostname: "19216858",
        ip: "192.168.1.48",
        mac: "00:0a:95:9d:68:62",
        leaseStart: "2023-06-15 11:50:00",
        leaseEnd: "2023-06-16 11:50:00",
      },
      {
        name: "Smart Humidifier",
        hostname: "19216859",
        ip: "192.168.1.49",
        mac: "00:0a:95:9d:68:63",
        leaseStart: "2023-06-15 11:55:00",
        leaseEnd: "2023-06-16 11:55:00",
      },
      {
        name: "Smart Alarm Clock",
        hostname: "19216860",
        ip: "192.168.1.50",
        mac: "00:0a:95:9d:68:64",
        leaseStart: "2023-06-15 12:00:00",
        leaseEnd: "2023-06-16 12:00:00",
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
