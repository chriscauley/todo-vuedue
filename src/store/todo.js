import { reactive } from 'vue'
import ls from 'local-storage-json'

const LS_KEY = 'store/todo'

const state = reactive({
  items: [],
  ...ls.get(LS_KEY)
})

const addItem = ({ text, tag}) => {
  state.items.push({text, tag})
  ls.set(LS_KEY, state)
}

export default window.TODO = { state, addItem }