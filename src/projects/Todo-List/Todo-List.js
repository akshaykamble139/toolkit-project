import React, { useState } from "react";
import { task_list as initialTasks } from "./tasks";
import "./TodoList.css";
import { useDocumentTitle } from "../../components/useDocumentTitle";

export const TodoListComponent = () => {
  useDocumentTitle("My Portfolio - Todo List");

  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState("");
  const [updateTask, setUpdateTask] = useState({ title: "" });
  const [showPopup, setShowPopup] = useState(false);

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, { title: newTask }]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task, index) => index !== id));
  };

  const openUpdatePopup = (id, title) => {
    setUpdateTask({ id, title });
    setShowPopup(true);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setTasks(
      tasks.map((task, index) =>
        index === updateTask.id ? { ...task, title: updateTask.title } : task
      )
    );
    setShowPopup(false);
  };

  return (
    <div className="todo-app">
      <h2>To Do List App</h2>
      <form onSubmit={addTask} className="add-task-form">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">Add Task</button>
      </form>
      <table className="task-table">
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{task.title}</td>
              <td>
                <button onClick={() => openUpdatePopup(index, task.title)}>
                  Update
                </button>
                <button onClick={() => deleteTask(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Update Task</h2>
            <form onSubmit={handleUpdate}>
              <input
                type="text"
                value={updateTask.title}
                onChange={(e) =>
                  setUpdateTask({ ...updateTask, title: e.target.value })
                }
              />
              <div className="popup-buttons">
                <button type="submit">Submit</button>
                <button type="button" onClick={() => setShowPopup(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
