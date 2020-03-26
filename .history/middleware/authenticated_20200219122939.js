export default function({ store, redirect, route }) {
  if (!store.state.token) {
    redirect('/login')
  }
  if (route.path === '/') {
    redirect('/dashboard')
  }
}
