import {IoMdAdd} from 'react-icons/io';

export default function AddTask({addTask}) {

  function handleAddButton() {
    addTask("");
  }

  return (
    <div className="flex flex-row px-5 py-2 bg-secondary rounded-lg min-w-min items-center mt-5 cursor-pointer" onClick={handleAddButton}>
      <span className="w-7 h-7 border-primary bg-primary rounded-lg mr-5 grid place-content-center">
          <IoMdAdd/>
      </span>
      <span className="text-lg font-bold">Add Task</span>
    </div>
  );
}
