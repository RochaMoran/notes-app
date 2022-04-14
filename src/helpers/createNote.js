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