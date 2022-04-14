import "./styles.css";
import { BsTrash } from "react-icons/bs";
import { IoIosAddCircle } from "react-icons/io";
import { CgNotes } from "react-icons/cg";
import { AiFillCaretDown } from "react-icons/ai";
import { MdOutlineFavoriteBorder } from "react-icons/md";

export default function NavBar() {
  return (
    <nav className="nav bg-slate-900">
      <ul>
        <li>
          <img src="https://randomuser.me/api/portraits/men/23.jpg" alt="" />
          <span className="text-white font-bold flex justify-center items-center">Juanito <AiFillCaretDown /></span>
        </li>
        <li>
          <a href="/">
            <MdOutlineFavoriteBorder />
            <h3>Favoritos</h3>
          </a>
        </li>
        <li>
          <a href="/">
            <IoIosAddCircle />
            <button>Crear</button>
          </a>
        </li>
        <li>
          <a href="/">
            <CgNotes />
            <button>Notas</button>
          </a>
        </li>
        <li>
          <a href="/">
            <BsTrash />
            <button>Papelera</button>
          </a>
        </li>
      </ul>
    </nav>
  );
}
