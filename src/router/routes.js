import Home from '@/views/Home'
import Login from '@/views/Login'
import Register from '@/views/Register'

export const routes = [
    {
        path: '/', name: 'homePage', component: Home
    },
    {
        path: '/login', name: 'loginPage', component: Login
    },
    {
        path: '/register', name: 'registerPage', component: Register
    },
]
