<template>
  <div>
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name:'TalkBoard',
  setup() {
    const name = 'Aさん'
    const message = 'メッセージ'
    return { name,message }
  }
})
</script>
