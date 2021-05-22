<template>
  <div class="home">
    <TalkBoard name="bob" message="hello!" />
    <TalkBoard name="jon" message="hey!" />
    <TalkBoard name="brian" message="fuck!" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TalkBoard from "@/components/TalkBoard.vue"; // @ is an alias to /src

export default defineComponent ({
  components: {
    TalkBoard
  }
})
</script>
