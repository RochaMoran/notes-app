import "./styles.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { createNote } from "../../helpers/createNote";
import ErrorMessage from "../ErrorMessage";
import { db } from "../../firebase/client";
import { collection, addDoc } from "firebase/firestore"; 

export default function CreateNote() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createNote),
  });

  const onSubmit = async (data:any) => {
    let date = new Date();

    const body = {
      ...data,
      create_time: date.toISOString().split('T')[0]
    }; 

    const docRef = await addDoc(collection(db, "notes"), body);
    console.log('nueva nota añadida', docRef)
  };

  return (
    <div className="bg-slate-700 create-note p-3.5">
      <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("title")}
          className="block my-2 py-1 pl-3 w-full outline-none border-none bg-transparent font-bold text-4xl text-slate-200"
          placeholder="Titulo"
        />
        <ErrorMessage error={errors?.title?.message} />
        <textarea
          {...register("description")}
          className="resize-none block my-2 pt-1 pl-3 w-full h-9 outline-none bg-transparent border-none text-lg text-slate-200"
          placeholder="Empieza a escribir una descripcion acá"
        />
          <ErrorMessage error={errors?.description?.message} />
        <div className="flex px-3 mt-4">
          <div className="mb-3 w-full">
            <label className="text-slate-300">Seleccione la prioridad: </label>
            <select
              {...register("priority")}
              className="form-select appearance-none
              mt-2
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-slate-800
                bg-slate-400 bg-clip-padding bg-no-repeat
                rounded
                transition
                ease-in-out
                m-0
                focus:text-slate-900 focus:bg-dark focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <option disabled value="none">Prioridad nota</option>
              <option value="high">Alta</option>
              <option value="low">Baja</option>
              <option value="medium">Media</option>
            </select>
          </div>
        </div>
        <ErrorMessage error={errors?.priority?.message} />
        <button className="save-note__button absolute right-2 top-3">
        <span>Guardar</span>
        <svg
          width="34"
          height="34"
          viewBox="0 0 74 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="37"
            cy="37"
            r="35.5"
            stroke="black"
            strokeWidth="3"
          ></circle>
          <path
            d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
            fill="black"
          ></path>
        </svg>
      </button>
      </form>
    </div>
  );
}
