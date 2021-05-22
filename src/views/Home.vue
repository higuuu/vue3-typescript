<template>
  <div class="home" v-for="data in talkData" :key="data">
    <TalkBoard :name="data.name" :message="data.message" />
  </div>
  <PostBoard />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TalkBoard from "@/components/TalkBoard.vue"; // @ is an alias to /src
import PostBoard from "@/components/PostBoard.vue";

export default defineComponent({
  components: {
    TalkBoard,
    PostBoard,
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
