/*import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import router from './router'*/

//createApp(App).use(Quasar, quasarUserOptions,router).mount('#q-app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import 'quasar/dist/quasar.css'

createApp(App)
  .use(router)
  .use(Quasar)
  .mount('#q-app')

