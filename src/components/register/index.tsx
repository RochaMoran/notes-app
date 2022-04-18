import MethodsAuth from "../methodsAuth";
import ErrorMessage from "../ErrorMessage";
import useAuth from "../hooks/useAuth";

export default function Register({ setClassAuth }: any) {
  const {
    handleSubmit,
    onSubmit,
    register,
    errors
  } = useAuth("register")
  
  return (
    <div className="form-container sign-up-container">
      <form action="#" className="form-auth" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="title-auth">Registrarse</h1>
        <MethodsAuth />
        <span className="span-auth">
          o use su correo electrónico para registrarse
        </span>
        <input
          {...register("email")}
          autoComplete="off"
          className="input-auth"
          type="email"
          placeholder="Email"
        />
         <ErrorMessage error={errors?.email?.message} />
        <input
          {...register("password")}
          autoComplete="off"
          className="input-auth"
          type="password"
          placeholder="Password"
        />
         <ErrorMessage error={errors?.password?.message} />
        <button className="button">Registrarse</button>
        <button
          className="button button-secondary"
          type="button"
          onClick={() => setClassAuth("")}
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}
