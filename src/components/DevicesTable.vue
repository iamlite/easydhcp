<template>
  <Datatable
    @on-sort="sort"
    @on-items-select="onItemSelect"
    :data="tableData"
    :header="tableHeader"
    :enable-items-per-page-dropdown="true"
    :checkbox-enabled="true"
    checkbox-label="id"
  >
    <template v-slot:id="{ row }">
      <slot name="id" :device="row"></slot>
    </template>
    <template v-slot:name="{ row }">
      <slot name="name" :device="row"></slot>
    </template>
    <template v-slot:hostname="{ row }">
      <slot name="hostname" :device="row"></slot>
    </template>
    <template v-slot:ip="{ row }">
      <slot name="ip" :device="row"></slot>
    </template>
    <template v-slot:mac="{ row }">
      <slot name="mac" :device="row"></slot>
    </template>
    <template v-slot:leaseTime="{ row }">
      <slot name="leaseTime" :device="row"></slot>
    </template>
    <template v-slot:actions="{ row }">
      <slot name="actions" :device="row"></slot>
    </template>
  </Datatable>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import type { Sort } from "@/components/kt-datatable//table-partials/models";

export default defineComponent({
  name: "DevicesTable",
  components: {
    Datatable,
  },
  props: {
    tableData: {
      type: Array,
      required: true,
    },
    tableHeader: {
      type: Array,
      required: true,
    },
    selectedIds: {
      type: Array,
      required: true,
    },
  },
  setup(props, { emit }) {
    const sort = (sort: Sort) => {
      emit("on-sort", sort);
    };
    const onItemSelect = (selectedItems: Array<number>) => {
      emit("on-items-select", selectedItems);
    };

    return {
      sort,
      onItemSelect,
    };
  },
});
</script>
