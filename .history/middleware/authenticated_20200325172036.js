export default function({ store, redirect, route }) {
  if (!store.state.token) {
    redirect('/login')
  }
  if (route.path === '/') {
    redirect('/dashboard')
  }
  if (route.path === '/register' || route.path === '/signature' || route.path === '/camera') {
    if (store.state.registerVisit.visitId === undefined) { 
      redirect('/dashboard')
    }
  }
}
