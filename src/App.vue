<template>
<div>
  <input v-model="text" />
  <select v-model="tag">
    <option>work</option>
    <option>play</option>
  </select>
  <button @click="addItem">add</button>
<ul>
  <tag-item v-for="item, index in items" :key="index" :item="item" />
</ul>
</div>
</template>

<script>
import store from '@/store'
import TagItem from '@/components/TagItem'

export default {
  name: 'App',
  components: { TagItem },
  provide: {
    items() { return this.items },
  },
  data() {
    return {
      text: '',
      tag:'',
    }
  },
  computed: {
    items: () => store.todo.state.items
  },
  methods: {
    addItem() {
      const { tag, text } = this
      store.todo.addItem({tag, text})
      this.text = ''
    }
  }
}
</script>
