import { Link } from 'react-router-dom'
import MethodsAuth from '../methodsAuth'

export default function Login ({setClassAuth}:any) {
    return (
        <div className="form-container sign-in-container">
        <form action="#">
          <h1>Iniciar Sesión</h1>
          <MethodsAuth />
          <span>o usa tu cuenta</span>
          <input autoComplete='off' className='input-auth' type="email" placeholder="Email" />
          <input autoComplete='off' className='input-auth' type="password" placeholder="Password" />
          <Link to="#">¿Olvidaste tu contraseña?</Link>
          <button>Iniciar Sesión</button>
          <button className="button-secondary" type="button" onClick={() => setClassAuth("right-panel-active")}>Registrarse</button>
        </form>
      </div>
    )
}