import * as yup from "yup";

export const createNote = yup
  .object({
    title: yup
      .string()
      .required("Favor, ingrese el titulo de la nota")
      .min(3, "Su titulo debe tener un minimo de 3 caracteres")
      .max(255, "Su titulo debe tener un maximo de 255 caracteres"),
    description: yup
      .string()
      .required("La descripcion es requerida")
      .min(3, "Su descripcion debe tener un minimo de 3 caracteres")
      .max(255, "Su descripcion debe tener un maximo de 255 caracteres"),
    priority: yup
      .string()
      .required("Se requiere el tipo de prioridad para la nota")
  })
  .required();

export const authSchema = yup
  .object({
    email: yup
      .string()
      .required("Favor, ingrese su correo electronico")
      .email("Ingresa una direccion de correo valida"),
    password: yup
      .string()
      .required("Se requiere tu contraseña")
      .min(7, "Su contraseña debe tener un minimo de 7 caracteres")
      .max(255, "Su contraseña debe tener un maximo de 255 caracteres"),
  })
  .required();