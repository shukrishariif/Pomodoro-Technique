import React, { useContext, useState } from "react";
import {TaskContext} from './context/TaskContext'
import "./style/TodoApp.css";
import TodoHeader from "./components/Todo/components/TodoHeader"
import FilterButtons from "./components/Todo/components/FilterButtons";
import TaskCounts from "./components/Todo/components/TaskCounts";
import TaskList from "./components/Todo/components/TaskList";
import AddTaskForm from "./components/Todo/components/AddTaskForm";
import EditDialog from "./components/Todo/components/EditDialog";


const TodoApp = () => {
  const { state, dispatch } = useContext(TaskContext);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskTitle, setEditTaskTitle] = useState("");

  const filteredTasks = (() => {
    let tasksToDisplay = state.tasks;

    switch (filter) {
      case "completed":
        tasksToDisplay = tasksToDisplay.filter((task) => task.completed);
        break;
      case "incomplete":
        tasksToDisplay = tasksToDisplay.filter((task) => !task.completed);
        break;
      default:
        break;
    }

    return tasksToDisplay.sort((a, b) => b.id - a.id);
  })();

  const addTask = () => {
    if (newTask.trim() !== "") {
      const newTaskObject = {
        id: Date.now(),
        title: newTask,
        completed: false,
      };
      dispatch({ type: "ADD_TASK", payload: newTaskObject });
      setNewTask("");
    } else {
      Swal.fire("error", "Field can not be empty", "error");
    }
  };

  const openEditDialog = (taskId, taskTitle) => {
    setEditTaskId(taskId);
    setEditTaskTitle(taskTitle);
  };

  const closeEditDialog = () => {
    setEditTaskId(null);
    setEditTaskTitle("");
  };

  const saveEditedTask = () => {
    console.log(editTaskTitle);
    if (editTaskTitle.trim() !== "") {
      dispatch({
        type: "UPDATE_TASK",
        payload: { id: editTaskId, title: editTaskTitle },
      });
      closeEditDialog();
    } else {
      Swal.fire("error", "Field can not be empty", "error");
    }
  };

  const toggleTaskCompletion = (taskId, completed) => {
    dispatch({ type: "TOGGLE_TASK", payload: { id: taskId, completed } });
  };

  const deleteTask = (taskId) => {
    dispatch({ type: "DELETE_TASK", payload: taskId });
  };

  const totalTasks = state.tasks.length;
  const completedTasks = state.tasks.filter((task) => task.completed).length;
  const incompleteTasks = totalTasks - completedTasks;

  return (
    <div className="todo-app-container">
      <div className="header">
        <div className="subhead">
          <TodoHeader />
          <FilterButtons filter={filter} setFilter={setFilter} />
        </div>
        <TaskCounts
          totalTasks={totalTasks}
          completedTasks={completedTasks}
          incompleteTasks={incompleteTasks}
        />
      </div>
      <div className="main">
        <div className="add-task">
          <AddTaskForm
            newTask={newTask}
            setNewTask={setNewTask}
            addTask={addTask}
          />
        </div>
        <div className="tasks-list">
          <TaskList
            filteredTasks={filteredTasks}
            toggleTaskCompletion={toggleTaskCompletion}
            openEditDialog={openEditDialog}
            deleteTask={deleteTask}
          />
        </div>
      </div>
      {editTaskId !== null && (
        <EditDialog
          editTaskId={editTaskId}
          editTaskTitle={editTaskTitle}
          setEditTaskTitle={setEditTaskTitle}
          saveEditedTask={saveEditedTask}
          closeEditDialog={closeEditDialog}
        />
      )}
    </div>
  );
};

export default TodoApp;
