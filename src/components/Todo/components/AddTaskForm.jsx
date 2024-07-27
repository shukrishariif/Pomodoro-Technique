import React from "react";

const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
  return (
    <div className="add-task-container">
      <input
        type="text"
        placeholder="What Are You Working On"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className="add-task-button" onClick={addTask}>
        Add Task
      </button>
    </div>
  );
};

export default AddTaskForm;
