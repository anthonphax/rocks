import { RouteObject } from "react-router-dom"
import { Dashboard } from "./pages"

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
        path: '*',
        element: 'error'
    }
]

export default routes
