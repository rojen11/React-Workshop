import { FiTrash } from "react-icons/fi";

export default function Task(props) {
  return (
    <div className="flex flex-row px-5 py-2 bg-secondary rounded-lg min-w-min items-center mt-5">
      <input type="checkbox" className="w-7 h-7 text-primary border-primary bg-secondary rounded-lg border-2 mr-5" />
      <div className="text-lg flex-1">{"test"}</div>
      <span className="cursor-pointer ml-5">
        <FiTrash />
      </span>
    </div>
  );
}
