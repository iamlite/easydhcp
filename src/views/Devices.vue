<template>
  <div class="card">
    <div class="card-header border-0 pt-6">
      <div class="card-title">
        <div class="d-flex align-items-center position-relative my-1">
          <KTIcon
            icon-name="magnifier"
            icon-class="fs-1 position-absolute ms-6"
          />
          <input
            type="text"
            v-model="search"
            @input="searchItems()"
            class="form-control form-control-solid w-250px ps-15"
            placeholder="Search Devices"
          />
        </div>
      </div>
      <div class="card-toolbar">
        <div
          v-if="selectedIds.length === 0"
          class="d-flex justify-content-end"
          data-kt-customer-table-toolbar="base"
        >
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#kt_modal_add_device"
          >
            <KTIcon icon-name="plus" icon-class="fs-2" />
            Add Device
          </button>
        </div>
        <div
          v-else
          class="d-flex justify-content-end align-items-center"
          data-kt-customer-table-toolbar="selected"
        >
          <div class="fw-bold me-5">
            <span class="me-2">{{ selectedIds.length }}</span>
            Selected
          </div>
          <button
            type="button"
            class="btn btn-danger"
            @click="deleteFewDevices()"
          >
            Delete Selected
          </button>
        </div>
      </div>
    </div>
    <div class="card-body pt-0">
      <Datatable
        @on-sort="sort"
        @on-items-select="onItemSelect"
        :data="tableData"
        :header="tableHeader"
        :enable-items-per-page-dropdown="true"
        :checkbox-enabled="true"
        checkbox-label="id"
      >
        <template v-slot:id="{ row: device }">
          {{ device.id }}
        </template>
        <template v-slot:name="{ row: device }">
          {{ device.name }}
        </template>
        <template v-slot:hostname="{ row: device }">
          {{ device.hostname }}
        </template>
        <template v-slot:ip="{ row: device }">
          {{ device.ip }}
        </template>
        <template v-slot:mac="{ row: device }">
          {{ device.mac }}
        </template>
        <template v-slot:leaseTime="{ row: device }">
          {{ device.leaseTime }}
        </template>
        <template v-slot:actions="{ row: device }">
          <a
            href="#"
            class="btn btn-sm btn-light btn-active-light-primary"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end"
          >
            Actions
            <KTIcon icon-name="down" icon-class="fs-5 m-0" />
          </a>
          <div
            class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semobold fs-7 w-125px py-4"
            data-kt-menu="true"
          >
            <div class="menu-item px-3">
              <router-link
                to="/apps/devices/device-details"
                class="menu-link px-3"
                >View</router-link
              >
            </div>
            <div class="menu-item px-3">
              <a @click="deleteDevice(device.id)" class="menu-link px-3">
                Delete
              </a>
            </div>
          </div>
        </template>
      </Datatable>
    </div>
  </div>
  <AddDeviceModal></AddDeviceModal>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import type { Sort } from "@/components/kt-datatable//table-partials/models";
import AddDeviceModal from "@/components/modals/forms/AddDeviceModal.vue";
import type { IDevice } from "@/core/data/devices";
import devices from "@/core/data/devices";
import arraySort from "array-sort";

export default defineComponent({
  name: "devices-listing",
  components: {
    Datatable,
    AddDeviceModal,
  },
  setup() {
    const tableHeader = ref([
      {
        columnName: "ID",
        columnLabel: "id",
        sortEnabled: true,
        columnWidth: 100,
      },
      {
        columnName: "Name",
        columnLabel: "name",
        sortEnabled: true,
        columnWidth: 175,
      },
      {
        columnName: "Hostname",
        columnLabel: "hostname",
        sortEnabled: true,
        columnWidth: 230,
      },
      {
        columnName: "IP Address",
        columnLabel: "ip",
        sortEnabled: true,
        columnWidth: 175,
      },
      {
        columnName: "MAC Address",
        columnLabel: "mac",
        sortEnabled: true,
        columnWidth: 175,
      },
      {
        columnName: "Lease Time",
        columnLabel: "leaseTime",
        sortEnabled: true,
        columnWidth: 225,
      },
      {
        columnName: "Actions",
        columnLabel: "actions",
        sortEnabled: false,
        columnWidth: 135,
      },
    ]);
    const selectedIds = ref<Array<number>>([]);
    const tableData = ref<Array<IDevice>>(devices);
    const initDevices = ref<Array<IDevice>>([]);
    onMounted(() => {
      initDevices.value.splice(0, tableData.value.length, ...tableData.value);
    });
    const deleteFewDevices = () => {
      selectedIds.value.forEach((item) => {
        deleteDevice(item);
      });
      selectedIds.value.length = 0;
    };
    const deleteDevice = (id: number) => {
      for (let i = 0; i < tableData.value.length; i++) {
        if (tableData.value[i].id === id) {
          tableData.value.splice(i, 1);
        }
      }
    };
    const search = ref<string>("");
    const searchItems = () => {
      tableData.value.splice(0, tableData.value.length, ...initDevices.value);
      if (search.value !== "") {
        let results: Array<IDevice> = [];
        for (let j = 0; j < tableData.value.length; j++) {
          if (searchingFunc(tableData.value[j], search.value)) {
            results.push(tableData.value[j]);
          }
        }
        tableData.value.splice(0, tableData.value.length, ...results);
      }
    };
    const searchingFunc = (obj: any, value: string): boolean => {
      for (let key in obj) {
        if (!Number.isInteger(obj[key]) && !(typeof obj[key] === "object")) {
          if (obj[key].indexOf(value) != -1) {
            return true;
          }
        }
      }
      return false;
    };
    const sort = (sort: Sort) => {
      const reverse: boolean = sort.order === "asc";
      if (sort.label) {
        arraySort(tableData.value, sort.label, { reverse });
      }
    };
    const onItemSelect = (selectedItems: Array<number>) => {
      selectedIds.value = selectedItems;
    };

    const loading = ref(true);

    return {
      tableData,
      tableHeader,
      deleteDevice,
      search,
      searchItems,
      selectedIds,
      deleteFewDevices,
      sort,
      onItemSelect,
      loading
    };
  },
});
</script>
