import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Task from './Task';
const Tagss = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const completeTask = (index) => {
    // Implementing complete task logic (if needed)
    // This could be marking a task as completed visually
  };

  return (
    <TagsContainer>
      <TaskInput onSubmit={(e) => { e.preventDefault(); addTask(e.target.task.value); e.target.task.value = ''; }}>
        <input type="text" name="task" placeholder="Add a task..." />
        <AddButton type="submit">Add</AddButton>
      </TaskInput>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onDelete={() => deleteTask(index)}
          onComplete={() => completeTask(index)}
        />
      ))}
    </TagsContainer>
  );
};

export default Tagss;

const TagsContainer = styled.div`
  background: ${(props) => props.theme.colors.primary};
  height: 5rem;
  width: 40rem;
  margin: 0 auto;
  border-radius: 5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  padding: 1rem;
`;

const TaskInput = styled.form`
  display: flex;
  gap: 0.5rem;
  width: 100%;
`;

const AddButton = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;

