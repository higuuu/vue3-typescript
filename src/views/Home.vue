<template>
  <div class="home" v-for="data in talkData" :key="data">
    <TalkBoard :name="data.name" :message="data.message" />
  </div>
  <PostBoard @post-board="postBoard" />
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
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
    const database = firebase.database();
    const key = "talk_board";
    const talkData = reactive([{}]);
    onMounted(() => {
      database.ref(key).on("value", (data) => {
        if (data) {
          const dataList = data.val();
          console.log(dataList);
          // データオブジェクトを配列に変更する
          Object.keys(dataList).forEach((val, key) => {
            dataList[val].id = val;
            if (!talkData[key + 1]) {
              talkData.push(dataList[val]);
            }
          });
        }
      });
    });
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
