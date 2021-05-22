<template>
  <h2>
    {{ displaySetting }}
  </h2>
</template>

<script>
import { inject, defineComponent } from "vue";

export default defineComponent({
  name: "DisplaySetting",
  setup() {
    const displaySetting = inject("storeSetting");
    return { displaySetting };
  },
});
</script>
