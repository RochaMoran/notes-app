export default function Overlay ({setClassAuth}:any) {
    return (
        <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>¡Bienvenido de nuevo!</h1>
            <p>
            Para mantenerse conectado con nosotros, inicie sesión con su información personal
            </p>
            <button className="ghost" onClick={() => setClassAuth("")}>
              Iniciar Sesion
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>¡Hola, amigo!</h1>
            <p>Ingresa tus datos personales y comienza tu viaje con nosotros</p>
            <button className="ghost" onClick={() => setClassAuth("right-panel-active")}>
              Registrarse
            </button>
          </div>
        </div>
      </div>
    )
}