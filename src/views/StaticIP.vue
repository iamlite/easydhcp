<template>
  <div class="card mb-5">
    <!--begin::Card body-->
    <div class="card-body">
      <!--begin::Stepper-->
      <div
        class="stepper stepper-links d-flex flex-column"
        id="kt_static_ip"
        ref="horizontalWizardRef"
      >
        <!--begin::Nav-->
        <div class="stepper-nav py-5 mt-5">
          <!--begin::Step 1-->
          <div class="stepper-item current" data-kt-stepper-element="nav">
            <h3 class="stepper-title">Select a Device</h3>
          </div>
          <!--end::Step 1-->

          <!--begin::Step 2-->
          <div class="stepper-item" data-kt-stepper-element="nav">
            <h3 class="stepper-title">Configure Network</h3>
          </div>
          <!--end::Step 2-->

          <!--begin::Step 3-->
          <div class="stepper-item" data-kt-stepper-element="nav">
            <h3 class="stepper-title">Reserve IP</h3>
          </div>
          <!--end::Step 3-->

          <!--begin::Step 4-->
          <div class="stepper-item" data-kt-stepper-element="nav">
            <h3 class="stepper-title">Review and Confirm</h3>
          </div>
          <!--end::Step 4-->

          <!--begin::Step 5-->
          <div class="stepper-item" data-kt-stepper-element="nav">
            <h3 class="stepper-title">Completed</h3>
          </div>
          <!--end::Step 5-->
        </div>
        <!--end::Nav-->

        <!--begin::Form-->
        <form
          class="mx-auto mw-600px w-100 pt-15 pb-10"
          novalidate
          id="kt_static_ip_form"
          @submit="handleStep"
        >
          <!--begin::Step 1-->
          <div class="current" data-kt-stepper-element="content">
            <Step1></Step1>
          </div>
          <!--end::Step 1-->

          <!--begin::Step 2-->
          <div data-kt-stepper-element="content">
            <Step2></Step2>
          </div>
          <!--end::Step 2-->

          <!--begin::Step 3-->
          <div data-kt-stepper-element="content">
            <Step3></Step3>
          </div>
          <!--end::Step 3-->

          <!--begin::Step 4-->
          <div data-kt-stepper-element="content">
            <Step4></Step4>
          </div>
          <!--end::Step 4-->

          <!--begin::Step 5-->
          <div data-kt-stepper-element="content">
            <Step5></Step5>
          </div>
          <!--end::Step 5-->

          <!--begin::Actions-->
          <div class="d-flex flex-stack pt-15">
            <!--begin::Wrapper-->
            <div class="mr-2">
              <button
                type="button"
                class="btn btn-lg btn-light-primary me-3"
                data-kt-stepper-action="previous"
                @click="previousStep"
              >
                <KTIcon icon-name="arrow-left" icon-class="fs-4 me-1" />
                Back
              </button>
            </div>
            <!--end::Wrapper-->

            <!--begin::Wrapper-->
            <div>
              <button
                type="button"
                class="btn btn-lg btn-primary me-3"
                data-kt-stepper-action="submit"
                v-if="currentStepIndex === totalSteps - 1"
                @click="formSubmit()"
              >
                <span class="indicator-label">
                  Submit
                  <KTIcon icon-name="arrow-right" icon-class="fs-3 ms-2 me-0" />
                </span>
                <span class="indicator-progress">
                  Please wait...
                  <span
                    class="spinner-border spinner-border-sm align-middle ms-2"
                  ></span>
                </span>
              </button>

              <button v-else type="submit" class="btn btn-lg btn-primary">
                Continue
                <KTIcon icon-name="arrow-right" icon-class="fs-4 ms-2 me-0" />
              </button>
            </div>
            <!--end::Wrapper-->
          </div>
          <!--end::Actions-->
        </form>
        <!--end::Form-->
      </div>
      <!--end::Stepper-->
    </div>
    <!--end::Card body-->
  </div>
  <div class="card mt-5">
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
import { getAssetPath } from "@/core/helpers/assets";
import { computed, defineComponent, onMounted, ref } from "vue";
import { StepperComponent } from "@/assets/ts/components";
import { useForm } from "vee-validate";
import Swal from "sweetalert2/dist/sweetalert2.js";
import * as Yup from "yup";
import Step1 from "@/components/wizard/steps/Step1.vue";
import Step2 from "@/components/wizard/steps/Step2.vue";
import Step3 from "@/components/wizard/steps/Step3.vue";
import Step4 from "@/components/wizard/steps/Step4.vue";
import Step5 from "@/components/wizard/steps/Step5.vue";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import AddDeviceModal from "@/components/modals/forms/AddDeviceModal.vue";
import type { Sort } from "@/components/kt-datatable/table-partials/models";
import type { IDevice } from "@/core/data/devices";
import devices from "@/core/data/devices";
import arraySort from "array-sort";

interface IStep1 {
  device?: string;
  macAddress?: string;
}

interface IStep2 {
  accountTeamSize?: string;
  accountName?: string;
  accountPlan?: string;
}

interface IStep3 {
  businessName?: string;
  businessDescriptor?: string;
  businessType?: string;
  businessDescription?: string;
  businessEmail?: string;
}

interface IStep4 {
  nameOnCard?: string;
  cardNumber?: string;
  cardExpiryMonth?: string;
  cardExpiryYear?: string;
  cardCvv?: string;
  saveCard?: string;
}

interface CreateAccount extends IStep1, IStep2, IStep3, IStep4 {}

export default defineComponent({
  name: "merged-component",
  components: {
    Step1,
    Step2,
    Step3,
    Step4,
    Step5,
    Datatable,
    AddDeviceModal,
  },
  setup() {
    const _stepperObj = ref<StepperComponent | null>(null);
    const horizontalWizardRef = ref<HTMLElement | null>(null);
    const currentStepIndex = ref(0);

    const formData = ref<CreateAccount>({
      accountType: "personal",
      accountTeamSize: "50+",
      accountName: "",
      accountPlan: "1",
      businessName: "Keenthemes Inc.",
      businessDescriptor: "KEENTHEMES",
      businessType: "1",
      businessDescription: "",
      businessEmail: "corp@support.com",
      nameOnCard: "Max Doe",
      cardNumber: "4111 1111 1111 1111",
      cardExpiryMonth: "1",
      cardExpiryYear: "2",
      cardCvv: "123",
      saveCard: "1",
    });

    onMounted(() => {
      _stepperObj.value = StepperComponent.createInsance(
        horizontalWizardRef.value as HTMLElement
      );
    });

    const createAccountSchema = [
      Yup.object()
        .shape({
          device: Yup.string().label("Device"),
          macAddress: Yup.string().label("MAC Address"),
        })
        .test(
          "either-or",
          "Either Device or MAC Address is required",
          (value) => value.device || value.macAddress
        ),
      Yup.object({
        accountName: Yup.string().required().label("Account Name"),
      }),
      Yup.object({
        businessName: Yup.string().required().label("Business Name"),
        businessDescriptor: Yup.string()
          .required()
          .label("Shortened Descriptor"),
        businessType: Yup.string().required().label("Corporation Type"),
        businessEmail: Yup.string().required().label("Contact Email"),
      }),
      Yup.object({
        nameOnCard: Yup.string().required().label("Name On Card"),
        cardNumber: Yup.string().required().label("Card Number"),
        cardExpiryMonth: Yup.string().required().label("Expiration Month"),
        cardExpiryYear: Yup.string().required().label("Expiration Year"),
        cardCvv: Yup.string().required().label("CVV"),
      }),
    ];

    const currentSchema = computed(() => {
      return createAccountSchema[currentStepIndex.value];
    });

    const { resetForm, handleSubmit } = useForm<
      IStep1 | IStep2 | IStep3 | IStep4
    >({
      validationSchema: currentSchema,
    });

    const totalSteps = computed(() => {
      if (_stepperObj.value) {
        return _stepperObj.value.totalStepsNumber;
      } else {
        return 1;
      }
    });

    const handleStep = handleSubmit((values) => {
      resetForm({
        values: {
          ...formData.value,
        },
      });

      formData.value = { ...values };

      currentStepIndex.value++;

      if (!_stepperObj.value) {
        return;
      }

      _stepperObj.value.goNext();
    });

    /**
     * Go to the previous step in the stepper.
     *
     * @param {object} stepperObj - The stepper object used to control navigation.
     * @param {number} currentStepIndex - The current step index.
     */
    const previousStep = (stepperObj, currentStepIndex) => {
      // If there is no stepper object, return early.
      if (!stepperObj) {
        return;
      }

      // Decrement the current step index to go back to the previous step.
      currentStepIndex--;

      // Use the stepper object to navigate to the previous step.
      stepperObj.goPrev();
    };

    /**
     * Show a success message and reloads the page after the user submits a form.
     */
    const formSubmit = () => {
      // Show a success message to the user
      Swal.fire({
        text: "All is cool! Now you submit this form",
        icon: "success",
        buttonsStyling: false,
        confirmButtonText: "Ok, got it!",
        heightAuto: false,
        customClass: {
          confirmButton: "btn fw-semobold btn-light-primary",
        },
      }).then(() => {
        // Reload the page after the user clicks the "Ok, got it!" button
        window.location.reload();
      });
    };

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

    /**
     * Deletes all devices with selected ids
     * @function deleteFewDevices
     */
    const deleteFewDevices = () => {
      // Iterate through selectedIds and delete each device
      selectedIds.value.forEach((item) => {
        deleteDevice(item);
      });
      // Clear selectedIds
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

/**
 * Replaces the tableData with initDevices and filters the result if search is not empty.
 * @returns void
 */
const searchItems = (): void => {
  // Replace tableData with initDevices
  tableData.value.splice(0, tableData.value.length, ...initDevices.value);

  // If search is not empty, filter the results
  if (search.value !== "") {
    let results: Array<IDevice> = [];

    // Loop through tableData and add items that match the search
    for (let j = 0; j < tableData.value.length; j++) {
      if (searchingFunc(tableData.value[j], search.value)) {
        results.push(tableData.value[j]);
      }
    }

    // Replace tableData with filtered results
    tableData.value.splice(0, tableData.value.length, ...results);
  }
};

    /**
     * Search the string properties of the object to see if the given value is present.
     * Only searches properties that are strings and not nested objects or integers.
     *
     * @param obj - The object to search in.
     * @param value - The value to search for.
     * @returns `true` if the value is found, otherwise `false`.
     */
    function searchObjectProperties(
      obj: Record<string, any>,
      value: string
    ): boolean {
      // Iterate through each key in the object
      for (let key in obj) {
        // Get the value of the key in the object
        const val = obj[key];
        // If the value is a string and not a nested object or integer
        if (
          typeof val === "string" &&
          !Number.isInteger(val) &&
          !isObject(val)
        ) {
          // If the value includes the search value, return true
          if (val.includes(value)) {
            return true;
          }
        }
      }
      // Return false if the value is not found
      return false;
    }

    /**
     * Check if the given value is an object
     *
     * @param value - The value to check.
     * @returns `true` if the value is an object, otherwise `false`.
     */
    function isObject(value: any): boolean {
      return value && typeof value === "object" && value.constructor === Object;
    }

    /**
     * Check if the given value is an object.
     *
     * @param value - The value to check.
     * @returns `true` if the value is an object, otherwise `false`.
     */
    function isObject(value: any): boolean {
      return value && typeof value === "object" && value.constructor === Object;
    }

    /**
     * Sorts the table data according to the provided sort object.
     * @param {Sort} sort - The sort object containing the label and order.
     */
    const sort = (sort) => {
      // Determine if the sort order is ascending or descending.
      const reverse = sort.order === "asc";

      // If a label is provided, sort the table data by that label in the specified order.
      if (sort.label) {
        arraySort(tableData.value, sort.label, { reverse });
      }
    };

    /**
     * Updates the selectedIds reactive variable with the provided array of selected item IDs.
     *
     * @param {Array<number>} selectedItems - Array of selected item IDs.
     */
    const onItemSelect = (selectedItems) => {
      // Update the selectedIds variable with the provided array of selected item IDs.
      selectedIds.value = selectedItems;
    };

    return {
      horizontalWizardRef,
      previousStep,
      handleStep,
      formSubmit,
      totalSteps,
      currentStepIndex,
      getAssetPath,
      tableData,
      tableHeader,
      deleteDevice,
      search,
      searchItems,
      selectedIds,
      deleteFewDevices,
      sort,
      onItemSelect,
    };
  },
});
</script>
