# v-directive
vue commonly used custom instructions

## demo
```vue
<script setup>
const handleClick = () => {
  console.log('防抖');
}
</script>
<template>
  <button v-debounce="{fn: handleClick, event: 'click', delay: 200}">click</button>
</template>

```