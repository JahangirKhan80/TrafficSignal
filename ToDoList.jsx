import { useState } from "react";
import "./App.css";

const ToDoList = () => {
  const [tasks, setTaskes] = useState([
    "Eat brackfast",
    "Take a showar",
    "walk the dog",
  ]);
  const [newtask, setnewTask] = useState("");

  const handleinputchang = (evnt) => {
    setnewTask(evnt.target.value);
  };

  const Addtask = () => {
    if (newtask.trim() !== "") {
      setTaskes([...tasks, newtask]);
      setnewTask(""); // clear input after adding
    }
  };

  const deletetask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTaskes(updatedTasks);
  };

  return (
    <div className="container">
      <h1>My To Do List</h1>
      <div className="To-do-list">
        <input
          type="text"
          value={newtask}
          onChange={handleinputchang}
          placeholder="Enter a task...."
        ></input>
        <button className="add-button" onClick={Addtask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deletetask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};
export default ToDoList;
