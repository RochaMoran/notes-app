import "./styles.css";
import { BiNotepad } from "react-icons/bi";
import { IoIosAddCircle } from "react-icons/io";
import { CgNotes } from "react-icons/cg";

export default function NavBar() {
  return (
    <nav className="nav bg-indigo-900">
      <ul>
        <li>
          <a href="/">
            <BiNotepad />
            <h3>Notes</h3>
          </a>
        </li>
        <li>
          <a href="/">
            <IoIosAddCircle />
            <button>more</button>
          </a>
        </li>
        <li>
          <a href="/">
            <CgNotes />
            <button>Notes</button>
          </a>
        </li>
      </ul>
    </nav>
  );
}
