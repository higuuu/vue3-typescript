<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="changeSetting()">変更</button>
  </div>
  <DisplaySetting />
</template>

<script>
import { inject, defineComponent, ref } from "vue";
import DisplaySetting from "@/components/DisplaySetting.vue";

export default defineComponent({
  components: {
    DisplaySetting,
  },
  setup() {
    const setting = inject("storeSetting");
    function changeSetting() {
      if (setting.value == "black") {
        setting.value = "red";
      } else {
        setting.value = "black";
      }
    }
    inject("storeSetting", setting);
    return { changeSetting, setting };
  },
});
</script>
