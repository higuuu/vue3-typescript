<template>
  <div>
    <div>
      <p>name</p>
      <input v-model="post.name" label="name" />
    </div>
    <div>
      <p>message</p>
      <input v-model="post.message" label="message" />
    </div>
    <div>
      <button @click="postAction()">送信</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

interface MessageProps {
  name: string;
  message: string;
}

export default defineComponent({
  name: "PostBoard",
  setup() {
    const post = reactive<MessageProps>({
      name: "",
      message: "",
    });
    function postAction() {
      console.log(post);
    }
    return { post, postAction };
  },
});
</script>
