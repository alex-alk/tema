const AppLayout = async () => (await import('./AppLayout.js')).AppLayout
import Router from '../../js_modules/Router.js'

// Lazy load
const Dashboard = async () => (await import('../Dashboard.js')).Dashboard
const AboutPage = async () => (await import('../AboutPage.js')).AboutPage
const AboutPagee = async () => (await import('../AboutPagee.js')).AboutPagee
const Users = async () => (await import('../Users.js')).Users
const Button = async () => (await import('../uikit/button/button.js')).Button
const Input = async () => (await import('../uikit/input/input.js')).Input
const Login = async () => (await import('../auth/login.js')).Login


const routes = [
    {
        path: '/',
        component: AppLayout,
        children: [
            { path: '/', component: Dashboard },
            { path: '/about', component: AboutPage },
            { path: '/users', component: Users },
            { path: '/uikit/button', component: Button },
            { path: '/uikit/input', component: Input },
        ]
    },
    { path: '/about', component: AboutPagee },
    { path: '/auth/login', component: Login }
]

// Change this to your app's base path, e.g. '/app' or '/' if root
const BASE_PATH = '';

export function path(projectPath) {
    return BASE_PATH + projectPath
}

// Instantiate and start router
export const router = new Router(routes, BASE_PATH);
window.addEventListener('DOMContentLoaded', () => {
    router.start();
});
