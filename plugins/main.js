import Vue from 'vue'
import { VueSpinners } from '@saeris/vue-spinners'
import msToMm from '~/filters/ms-to-mm'
import blur from '~/directives/blur'
import EventBus from '~/plugins/event-bus'

Vue.use(VueSpinners)
Vue.use(msToMm)
Vue.use(blur)
Vue.use(EventBus)





