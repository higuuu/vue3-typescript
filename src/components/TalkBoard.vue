<template>
  <div>
    <h2>{{ userName }}</h2>
    <p>{{ userMessage }}</p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";

interface MessageProps {
  name: string;
  message: string;
}

export default defineComponent({
  name: "TalkBoard",
  props: {
    name: {
      type: String,
      default: "",
    },
    message: {
      type: String,
      default: "",
    },
  },
  setup(props: MessageProps) {
    const userName = ref(props.name);
    const userMessage = computed(() => {
      const messageText = props.message;
      if (messageText.includes("fuck")) {
        userName.value = 'ダメな人'
        return "放送禁止用語です";
      } else {
        return messageText;
      }
    });
    return { userName, userMessage };
  },
});
</script>
