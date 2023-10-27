import { RouteObject } from "react-router-dom"
import { Dashboard } from "./pages"
import { LoginScreen } from "./pages"

const routes: RouteObject[] = [
    {
        path: '/',
        Component: Dashboard,
    },
    {
        path: 'alerts',
        element: 'alerts'
    },
    {
        path: 'settings',
        element: 'settings'
    },
    {
        path: 'logs',
        element: 'logs'
    },
    {
        path: '/login',
        Component: LoginScreen,
    },
    {
        path: '*',
        element: 'error'
    }
]

export default routes
