# v-directive
vue commonly used custom instructions

## demo
```vue
<script setup>
const debounceClick = () => {
  console.log('防抖');
}
const throttleClick = () => {
  console.log('节流');
}
</script>
<template>
  <button v-debounce="{fn: debounceClick, event: 'click', delay: 200}">click</button>
 <button v-throttle="{fn: throttleClick, event: 'click', delay: 200}">click</button>
</template>

```
