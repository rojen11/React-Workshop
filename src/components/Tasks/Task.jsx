import { FiTrash } from "react-icons/fi";
import { useState } from "react";

export default function Task({ task, editTask, removeTask, completeTask }) {
  const [editMode, setEditMode] = useState(false);

  const [taskValue, setTaskValue] = useState(task.task);

  function handleTaskClick() {
    if (!task.completed) {
      setEditMode(true);
    }
  }

  function handleTaskValue(e) {
    e.preventDefault();

    setTaskValue(e.target.value);
  }

  function handleKeyPress(e) {
    if (e.code === "Enter") {
      editTask(task.id, taskValue);
      setEditMode(false);
    }
  }

  function handleDeleteButton() {
    removeTask(task.id);
  }

  return (
    <div
      className="flex flex-row px-5 py-2 bg-secondary rounded-lg min-w-min items-center mt-5"
      onClick={handleTaskClick}
    >
      <input
        type="checkbox"
        className="w-7 h-7 text-primary border-primary bg-secondary rounded-lg border-2 mr-5"
        onChange={() => completeTask(task.id)}
        defaultChecked={task.completed}
      />

      {editMode ? (
        <input
          type="text"
          className="text-lg flex-1 bg-secondary"
          value={taskValue}
          onChange={handleTaskValue}
          onKeyPress={handleKeyPress}
        />
      ) : (
        <div className={`text-lg flex-1 ${task.completed && "line-through"}`}>
          {task.task}
        </div>
      )}

      <span className="cursor-pointer ml-5" onClick={handleDeleteButton}>
        <FiTrash />
      </span>
    </div>
  );
}
