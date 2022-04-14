import "./styles.css";

export default function CreateNote() {
  return (
    <div className="bg-slate-700 create-note p-3.5">
      <form className="mt-10">
        <input
          className="block my-2 py-1 pl-3 w-full outline-none border-none bg-transparent font-bold text-4xl"
          placeholder="Titulo"
        />
        <textarea
          className="resize-none block my-2 py-1 pl-3 w-full outline-none border-none bg-transparent text-lg"
          placeholder="Empieza a escribir una descripcion acá"
        />
        <div className="flex px-2.5">
          <div className="mb-3 w-full">
            <select
              className="form-select appearance-none
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-white
                bg-slate-800 bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-slate-200 focus:bg-dark focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <option selected>Prioridad nota</option>
              <option value="1">Alta</option>
              <option value="2">Baja</option>
              <option value="3">Media</option>
            </select>
          </div>
        </div>
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
            stroke-width="3"
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
