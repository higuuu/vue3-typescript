<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="changeSetting()">変更</button>
  </div>
  <DisplaySetting />
</template>

<script>
import { provide, defineComponent, ref } from "vue";
import DisplaySetting from "@/components/DisplaySetting.vue";

export default defineComponent({
  components: {
    DisplaySetting,
  },
  setup() {
    const setting = ref("black");
    function changeSetting() {
      if (setting.value == "black") {
        setting.value = "red";
      } else {
        setting.value = "black";
      }
    }
    provide("storeSetting", setting);
    return { changeSetting, setting };
  },
});
</script>
