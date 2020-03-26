import $axios from 'axios'

export default function ({ store, route, app: { $axios } }) {
  console.log( $axios.defaults.headers.common.Authorization )
}
