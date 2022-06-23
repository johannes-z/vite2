import { h } from "vue";
import { ref } from "vue";
import { defineComponent } from "vue";
import MyComponent from './InfiniteLoaderWrapper.vue'
import { StateChanger } from 'vue-infinite-loading'

const sleep = time => new Promise(res => setTimeout(res, time, "done sleeping"));

export const TestComponent = defineComponent({
  setup (props, ctx) {
    const errorMessage = ref('')

    const onHandle = async ($state: StateChanger) => {
      console.log($state);

      await sleep(2000)

      console.log($state)
    }

    return () => h(MyComponent, {
      props: {
        errorMessage: errorMessage.value
      },
      on: {
        infinite: onHandle,
      },
    })
  }
})