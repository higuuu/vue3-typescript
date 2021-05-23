<template>
  <div class="home" v-for="data in talkData" :key="data">
    <TalkBoard :name="data.name" :message="data.message" />
  </div>
  <PostBoard @post-board="postBoard" />
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import TalkBoard from "@/components/TalkBoard.vue"; // @ is an alias to /src
import PostBoard from "@/components/PostBoard.vue";
import firebase from "@/plugins/firebase";

interface MessageProps {
  name: string;
  message: string;
}

export default defineComponent({
  components: {
    TalkBoard,
    PostBoard,
  },
  setup() {
    const talkData = reactive([
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
    ]);
    function postBoard(post: MessageProps) {
      database.ref(key).push({
        name: post.name,
        message: post.message,
      });
    }
    return { talkData, postBoard };
  },
});
</script>
