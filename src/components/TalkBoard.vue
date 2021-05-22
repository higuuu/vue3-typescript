<template>
  <div>
    <h2>{{ userName }}</h2>
    <p>{{ userMessage }}</p>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from '@vue/composition-api'

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
  setup(props){
    const userName = props.name
    const userMessage = props.message
    return { userName,userMessage }
  }
})
</script>
