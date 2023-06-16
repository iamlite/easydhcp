<template>
  <!--begin::Tables Widget 13-->
  <div :class="widgetClasses" class="card">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bold fs-3 mb-1">Device List</span>
        <span class="text-muted mt-1 fw-semobold fs-7">Current lease information</span>
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
          <!-- Removed KTIcon component -->
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
        <KTDataTable
          :header="['Name', 'Hostname', 'IP Address', 'MAC Address', 'Lease Time', 'Actions']"
          :data="list"
          :itemsPerPage="10"
          :itemsPerPageDropdownEnabled="true"
          :checkboxEnabled="true"
          :checkboxLabel="id"
          :total="list.length"
          :loading="false"
          :sortLabel="null"
          :sortOrder="asc"
          :emptyTableText="Nodatafound"
          :currentPage="1"
          @page-change="pageChange"
          @on-sort="onSort"
          @on-items-select="onItemSelect"
          @on-items-per-page-change="onItemsPerPageChange"
        >
          <template v-slot:default="{ row: item }">
            <tr>
              <td>{{ item.name }}</td>
              <td>{{ item.hostname }}</td>
              <td>{{ item.ip }}</td>
              <td>{{ item.mac }}</td>
              <td>{{ item.leaseStart }}</td>
              <td>
                <!-- Actions -->
              </td>
            </tr>
          </template>
        </KTDataTable>
        <!--end::Table-->
      </div>
      <!--end::Table container-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Tables Widget 13-->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import KTDataTable from '@/components/kt-datatable/KTDataTable.vue';
import Dropdown2 from '@/components/dropdown/Dropdown2.vue';

export default defineComponent({
  name: "dev",
  components: {
    KTDataTable,
    Dropdown2,
  },
  setup() {
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
        name: "Bobs Iphone 12 Pro Max",
        hostname: "19216813",
        ip: "192.168.1.3",
        mac: "00:0a:15:2d:68:16",
        leaseStart: "2023-06-15 08:00:00",
        leaseEnd: "2023-06-16 08:00:00",
      },
      // ... other items ...
    ];
    const pageChange = (page) => {
      console.log(`Page changed to: ${page}`);
      // handle page change
    };

    const onSort = (sort) => {
      console.log(`Sort changed to: ${sort}`);
      // handle sort
    };

    const onItemSelect = (selectedItems) => {
      console.log(`Items selected: ${selectedItems}`);
      // handle item select
    };

    const onItemsPerPageChange = (itemsPerPage) => {
      console.log(`Items per page changed to: ${itemsPerPage}`);
      // handle items per page change
    };

    return {
      list,
      pageChange,
      onSort,
      onItemSelect,
      onItemsPerPageChange,
    };
  },
});
</script>
