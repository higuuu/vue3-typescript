<template>
  <div class="home" v-for="data in talkData" :key="data">
    <TalkBoard :name="data.name" :message="data.message" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TalkBoard from "@/components/TalkBoard.vue"; // @ is an alias to /src

export default defineComponent({
  components: {
    TalkBoard,
  },
  setup() {
    const talkData = [
      {
        name: "bob",
        message: "hello!",
      },
      {
        name: "jon",
        message: "hey!",
      },
      {
        name: "brian",
        message: "fuck!",
      },
    ];
    return { talkData };
  },
});
</script>
