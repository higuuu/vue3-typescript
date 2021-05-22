<template>
  <div>
    <h2>{{ userName }}</h2>
    <p>{{ userMessage }}</p>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from '@vue/composition-api'

interface MessageProps {
  name: string;
  message: string;
}

export default defineComponent({
  name:'TalkBoard',
  props: {
    name: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    }
  },
  setup(props:MessageProps){
    const userName = props.name
    const userMessage = props.message
    return { userName,userMessage }
  }
})
</script>
