import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([
    "Eat a breakfast",
    "Take a shower",
    "Go to school",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function addTask() {}
  function DeleteTask(index) {}
  function moveTaskUp(index) {}
  function moveTaskDown(index) {}

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-btn" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-btn" onClick={() => DeleteTask(index)}>
              Delete
            </button>
            <button
              className="btn btn-primary"
              onClick={() => moveTaskUp(index)}
            >
              Move up
            </button>
            <button className="move-btn" onClick={() => moveTaskDown(index)}>
              Move down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default ToDoList;
