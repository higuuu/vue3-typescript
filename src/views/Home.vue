<template>
  <div class="home">
    <TalkBoard />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TalkBoard from "@/components/TalkBoard.vue"; // @ is an alias to /src

@Options({
  components: {
    TalkBoard,
  },
})
export default class Home extends Vue {}
</script>
