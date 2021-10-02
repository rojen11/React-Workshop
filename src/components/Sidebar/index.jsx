import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="text-white px-7 font-bold text-xl pt-9 bg-secondary drop-shadow">
      <h3 className="text-4xl mb-10">Todolist</h3>
      <ul>
        <li className="p-3">
          <Link to="/">All</Link>
        </li>
        <li className="p-3">
          <Link to="/pending">Pending</Link>
        </li>
        <li className="p-3">
          <Link to="/completed">Completed</Link>
        </li>
      </ul>
    </div>
  );
}
