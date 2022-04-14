import "./styles.css";

interface propsNote {
  title: string;
  description: string;
  date: string;
  priority?: string;
}

export default function Note({title, description, date, priority}:propsNote) {
  return (
    <div className="text-white border-b border-slate-700 py-3">
      <h5 className="font-bold">{title}</h5>
      <p className="truncate text-slate-300">
        {description}
      </p>
      <div className="flex justify-between">
        <span className="text-xs block text-sky-300">{priority}</span>
        <span className="text-xs block text-slate-400">{date.toString()}</span>
      </div>
    </div>
  );
}
