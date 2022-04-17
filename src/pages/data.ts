import Home from './home/home'
import Register from './register/auth'
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