import { extend, localize } from 'vee-validate'
import { required, email, max } from 'vee-validate/dist/rules'

import es from 'vee-validate/dist/locale/es.json'

localize('es', es)

extend('required', {
  ...required,
  message: 'Este campo es requerido'
})

extend('email', {
  ...email
})

extend('max', {
  ...max
})
