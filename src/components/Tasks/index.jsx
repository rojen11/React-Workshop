import Task from "./Task";
import AddTask from "./AddTask";

export default function Tasks({
  addTask,
  editTask,
  completeTask,
  removeTask,
  tasks,
  section,
}) {
  const pending = section === "Pending";

  return (
    <>
      <h4 className="font-bold">
        {section} -{" "}
        {tasks ? tasks.filter((t) => t.completed === !pending).length : 0}
      </h4>
      <div className="mt-3">
        {tasks &&
          tasks
            .filter((t) => t.completed === !pending)
            .map((t) => (
              <Task
                task={t}
                editTask={editTask}
                key={t.id}
                removeTask={removeTask}
                completeTask={completeTask}
              />
            ))}

        {pending && <AddTask addTask={addTask} />}
      </div>
    </>
  );
}
