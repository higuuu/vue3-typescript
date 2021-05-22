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
import { defineComponent, reactive, SetupContext } from "vue";

interface MessageProps {
  name: string;
  message: string;
}

export default defineComponent({
  name: "PostBoard",
  setup(props, context: SetupContext) {
    const post = reactive<MessageProps>({
      name: "",
      message: "",
    });
    function postAction() {
      context.emit("post-board", post);
    }
    return { post, postAction };
  },
});
</script>
