<template>
  <div class="w-100">
    <!--begin::Heading-->
    <div class="pb-10 pb-lg-15">
      <!--begin::Title-->
      <h2 class="fw-bold d-flex align-items-center text-dark">
        Add New Device
        <i
          class="fas fa-exclamation-circle ms-2 fs-7"
          v-tooltip
          title="This is where you are adding a new device"
        ></i>
      </h2>
      <!--end::Title-->

      <!--begin::Notice-->
      <div class="text-gray-400 fw-semobold fs-6">
        If you need more info, please check our
        <a href="#" class="link-primary fw-bold">wiki</a>.
      </div>
      <!--end::Notice-->
    </div>
    <!--end::Heading-->
    <!--begin::Input group-->
    <div class="fv-row mb-10">
      <!--begin::Label-->
      <label class="form-label required">Select your Device</label>
      <!--end::Label-->

      <!--begin::Input-->
      <Field
        name="device"
        class="form-select form-select-lg form-select-solid"
        data-control="select2"
        data-placeholder="Select..."
        data-allow-clear="true"
        data-hide-search="true"
        as="select"
      >
        <option></option>
        <option value="1">Iphone</option>
        <option value="1">Android</option>
        <option value="2">TV</option>
        <option value="3">Fridge</option>
        <option value="4">192.168.1.147</option>
        <option value="5">192.168.1.45</option>
      </Field>
      <!--end::Input-->
      <ErrorMessage
        name="device"
        class="fv-plugins-message-container invalid-feedback"
      ></ErrorMessage>
    </div>
    <!--end::Input group-->
    <!--begin::Or-->
    <div class="d-flex justify-content-center align-items-center my-5">
      <div class="border-bottom w-100"></div>
      <span class="px-3 bg-white text-muted">OR</span>
      <div class="border-bottom w-100"></div>
    </div>
    <!--end::Or-->
    <!--begin::Input group-->
    <div class="fv-row mb-10">
      <!--end::Label-->
      <label class="form-label">MAC Address</label>
      <!--end::Label-->

      <!--begin::Input-->
      <Field
        type="text"
        name="MAC Address"
        class="form-control form-control-lg form-control-solid"
        rows="1"
      ></Field>
      <!--end::Input-->
    </div>
    <!--end::Input group-->
  </div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import { ErrorMessage, Field } from "vee-validate";

export default defineComponent({
  name: "step-1",
  components: {
    Field,
    ErrorMessage,
  },
  setup() {
    return {
      getAssetPath,
    };
  },
});
</script>
