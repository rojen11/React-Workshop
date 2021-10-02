import Task from "./Task";
import AddTask from "./AddTask";

export default function Tasks() {
  return (
    <>
      <h4 className="font-bold">Tasks - 3</h4>
      <div className="mt-3">
        <Task />
        <Task />
        <Task />
        <AddTask />
      </div>
    </>
  );
}
