import { RouteObject } from "react-router"
import App from "./App"

const routes: RouteObject[] = [
    {
        path: '/',
        Component: App,
        children: [
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
            }
        ]
    }
]

export default routes
