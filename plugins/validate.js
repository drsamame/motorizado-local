import { extend, localize } from 'vee-validate'
import { required, email, max, max_value, min, alpha_spaces } from 'vee-validate/dist/rules'

import es from 'vee-validate/dist/locale/es.json'

localize('es', es)

extend('required', {
  ...required,
  message: 'Este campo es requerido'
})

extend('max_value', {
  ...max_value,
})

extend('email', {
  ...email
})

extend('max', {
  ...max
})

extend('min', {
  ...min
})

extend('alpha_spaces', {
  ...alpha_spaces
})