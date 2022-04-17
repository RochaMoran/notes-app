import MethodsAuth from '../methodsAuth'

export default function Register ({setClassAuth}:any) {
    return (
        <div className="form-container sign-up-container">
        <form action="#">
          <h1>Registrarse</h1>
          <MethodsAuth />
          <span>o use su correo electrónico para registrarse</span>
          <input autoComplete='off' className='input-auth' type="text" placeholder="Name" />
          <input autoComplete='off' className='input-auth' type="email" placeholder="Email" />
          <input autoComplete='off' className='input-auth' type="password" placeholder="Password" />
          <button>Registrarse</button>
          <button className="button-secondary" type="button" onClick={() => setClassAuth("")}>Iniciar Sesión</button>
        </form>
      </div>
    )
}