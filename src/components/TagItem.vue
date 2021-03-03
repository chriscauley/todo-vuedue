<template>
<li>{{item.tag}}: {{ item.text }}</li>
</template>

<script>
export default {
  props: {
    item: Object,
  },
}
</script>