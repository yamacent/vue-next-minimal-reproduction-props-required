import { createApp, defineComponent, h } from 'vue'

const MyComponent = defineComponent({
  props: {
    message: {
      type: String,
      default: 'hello'
    }
  },
  setup(props) {
    return () => h('span', props.message)
  }
})

const App = defineComponent({
  setup() {
    return () => h(MyComponent, {})
  }
})

createApp(App).mount('#app')
