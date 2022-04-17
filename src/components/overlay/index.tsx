export default function Overlay({ setClassAuth }: any) {
  return (
    <div className="overlay-container">
      <div className="overlay">
        <div className="overlay-panel overlay-left">
          <h1 className="title-auth">¡Bienvenido de nuevo!</h1>
          <p className="paragraph-overlay">
            Para mantenerse conectado con nosotros, inicie sesión con su
            información personal
          </p>
          <button className="button ghost" onClick={() => setClassAuth("")}>
            Iniciar Sesion
          </button>
        </div>
        <div className="overlay-panel overlay-right">
          <h1 className="title-auth">¡Hola, amigo!</h1>
          <p className="paragraph-overlay">
            Ingresa tus datos personales y comienza tu viaje con nosotros
          </p>
          <button
            className="button ghost"
            onClick={() => setClassAuth("right-panel-active")}
          >
            Registrarse
          </button>
        </div>
      </div>
    </div>
  );
}
