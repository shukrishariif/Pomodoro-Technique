import React, { useState } from "react";
import styled from "styled-components";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editedTask, setEditedTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const startEdit = (index) => {
    setEditingIndex(index);
    setEditedTask(tasks[index].text);
  };

  const saveEdit = () => {
    const updatedTasks = [...tasks];
    updatedTasks[editingIndex].text = editedTask;
    setTasks(updatedTasks);
    setEditingIndex(-1);
    setEditedTask("");
  };

  const cancelEdit = () => {
    setEditingIndex(-1);
    setEditedTask("");
  };

  return (
    <TaskManagerContainer>
      <TaskManagerHeader>
        <TaskManagerTitle>Task Manager</TaskManagerTitle>
      </TaskManagerHeader>
      <TaskInputContainer>
        <TaskInput
          type="text"
          placeholder="What Are You Working On"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <AddButton onClick={addTask}>Add</AddButton>
      </TaskInputContainer>
      <TaskList>
        {tasks.map((task, index) => (
          <TaskItem key={index}>
            <Checkbox
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
            />
            {editingIndex === index ? (
              <EditInput
                type="text"
                value={editedTask}
                onChange={(e) => setEditedTask(e.target.value)}
              />
            ) : (
              <TaskText completed={task.completed} color="rgba(0, 0, 0, 0.7)">
                {task.text}
              </TaskText>
            )}
            {editingIndex === index ? (
              <EditButtons>
                <SaveButton onClick={saveEdit}>Save</SaveButton>
                <CancelButton onClick={cancelEdit}>Cancel</CancelButton>
              </EditButtons>
            ) : (
              <EditButtons>
                <EditButton onClick={() => startEdit(index)}>Edit</EditButton>
                <DeleteButton onClick={() => deleteTask(index)}>
                  Delete
                </DeleteButton>
              </EditButtons>
            )}
          </TaskItem>
        ))}
      </TaskList>
    </TaskManagerContainer>
  );
};

export default TaskManager;

const TaskManagerContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 4rem;
  background-color: white;
  padding: 3rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TaskManagerHeader = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const TaskManagerTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #1a202c;
`;

const TaskInputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const TaskInput = styled.input`
  padding: 1rem 1.5rem;
  font-size: 1.25rem;
  border: none;
  border-radius: 4px;
  background-color: #f1f3f5;
  flex-grow: 1;
  margin-right: 1.5rem;
`;

const AddButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.25rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const TaskList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const TaskItem = styled.li`
  display: flex;
  align-items: center;
  padding: 1.5rem 0;
  border-bottom: 1px solid #f1f3f5;
`;

const Checkbox = styled.input`
  margin-right: 1.5rem;
  transform: scale(1.5);
`;

const TaskText = styled.span`
  flex-grow: 1;
  font-size: 1.5rem;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  color: ${(props) => props.color};
`;

const EditInput = styled.input`
  flex-grow: 1;
  font-size: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.75rem;
`;

const EditButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const EditButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1.125rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const SaveButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1.125rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const CancelButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1.125rem;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1.125rem;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;