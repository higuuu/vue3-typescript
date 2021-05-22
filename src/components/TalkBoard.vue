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
    const name = 'Betterさん'
    const message = 'hogehoge'
    return { name,message }
  }
})
</script>
