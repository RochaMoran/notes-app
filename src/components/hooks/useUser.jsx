import { useCallback, useContext } from 'react'
import { Context } from '../context/userContext'
import Cookies from 'universal-cookie';
 
const cookies = new Cookies();

export default function useUser () {
    const {jwt, setJwt} = useContext(Context)

    const login = useCallback((token) => {
        cookies.set("token", token, "/")
        setJwt(JSON.parse(cookies.get("token")))
    }, [setJwt])
   
    const logout = useCallback(() => {
        setJwt(null)
    }, [setJwt])

    return {
        isLogged: Boolean(jwt),
        login,
        logout
    }
}