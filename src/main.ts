import Vue from 'vue'
import { TestComponent } from './TestComponent'

new Vue({
  render: h => h(TestComponent)
}).$mount('#app')