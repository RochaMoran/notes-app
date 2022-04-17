import "./styles.css";
import { appState } from "../../helpers/const/interfaces";

export default function Note({title, description, create_time, priority}:appState["note"]) {
  return (
    <div className="text-white border-b border-slate-700 py-3 note">
      <h5 className="font-bold">{title}</h5>
      <p className="truncate text-slate-300">
        {description}
      </p>
      <div className="flex justify-between">
        <span className="text-xs block text-sky-300">{priority}</span>
        <span className="text-xs block text-slate-400">{create_time}</span>
      </div>
    </div>
  );
}
