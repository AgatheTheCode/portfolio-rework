<template>
  <div>
    <h2>Hello this is for refs man!</h2>
    <p>You have counted {{ counter }} times</p>
    <input type="text" ref="input">
    <button @click="submit">Add 1 to counter</button>
  </div>
</template>
<script lang="ts">
import {ref} from 'vue'
export default {
  name: 'Test',
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    submit() {
      this.counter++;
      console.log(this)
    }
  }
}
</script>