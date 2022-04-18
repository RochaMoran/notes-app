import { useState, createContext } from 'react'
import Cookies from 'universal-cookie';
 
const cookies = new Cookies();
export const Context = createContext({})

type Props = {
    children: JSX.Element,
};

export default function UserContextProvider({children}:Props) {
  const [jwt, setJwt] = useState<any>(null || cookies.get("token"))

  return <Context.Provider value={{jwt, setJwt}}>
    {children}
  </Context.Provider>
}
