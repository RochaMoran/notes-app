import Home from './home'
import Register from './register/register'
import { appState } from '../helpers/const/interfaces'

export const routes:appState["routes"] = {
    auth: [
        {
            path: "/",
            element: Home
        },
    ],
    root: [
        {
            path: "/",
            element: Register
        }
    ]
}