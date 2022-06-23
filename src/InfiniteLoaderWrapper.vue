<template>
  <InfiniteLoading ref="infiniteLoader"
                   @infinite="$emit('infinite', $event)">
    <template #spinner>
      Loading
    </template>

    <template v-if="!!errorMessage" slot="error">
      <p style="white-space: normal;">{{ errorMessage }}</p>
    </template>
  </InfiniteLoading>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue'
import InfiniteLoading from 'vue-infinite-loading'

export default defineComponent({
  components: {
    InfiniteLoading
  },

  props: {
    errorMessage: { type: String, default: undefined }
  },
  
  setup (_, { emit }) {
    const infiniteLoader = ref(null)

    onMounted(() => {
      console.log(infiniteLoader.value.stateChanger);
    })

    const unwatch = watch(infiniteLoader, (vm: any) => {
      console.log(vm.stateChanger);
      if (!vm) return
      emit('infinite', vm.stateChanger)
      unwatch()
    })

    return {
      infiniteLoader,
    }
  },
})
</script>