import { Link } from "react-router-dom";
import MethodsAuth from "../methodsAuth";

export default function Login({ setClassAuth }: any) {
  return (
    <div className="form-container sign-in-container">
      <form action="#" className="form-auth">
        <h1 className="title-auth">Iniciar Sesión</h1>
        <MethodsAuth />
        <span className="span-auth">o usa tu cuenta</span>
        <input
          autoComplete="off"
          className="input-auth"
          type="email"
          placeholder="Email"
        />
        <input
          autoComplete="off"
          className="input-auth"
          type="password"
          placeholder="Password"
        />
        <Link className="link-auth" to="#">
          ¿Olvidaste tu contraseña?
        </Link>
        <button className="button">Iniciar Sesión</button>
        <button
          className="button button-secondary"
          type="button"
          onClick={() => setClassAuth("right-panel-active")}
        >
          Registrarse
        </button>
      </form>
    </div>
  );
}
