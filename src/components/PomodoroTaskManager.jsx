import React, { useState } from 'react';
import styled from 'styled-components';

const PomodoroTaskManager = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Complete research on Pomodoro technique', completed: false, pomodoros: 2 },
    { id: 2, title: 'Implement Pomodoro timer in React app', completed: false, pomodoros: 0 },
    { id: 3, title: 'Write blog post about Pomodoro productivity', completed: true, pomodoros: 4 },
  ]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleAddTask = () => {
    if (newTaskTitle.trim() !== '') {
      const newTask = {
        id: tasks.length + 1,
        title: newTaskTitle,
        completed: false,
        pomodoros: 0,
      };
      setTasks([...tasks, newTask]);
      setNewTaskTitle('');
    }
  };

  const handleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <Container>
      <h1>Pomodoro Task Manager</h1>
      <FormContainer>
        <h2>Add a new task</h2>
        <input
          type="text"
          placeholder="Enter task title"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </FormContainer>
      <TaskList>
        {tasks.map((task) => (
          <TaskItem key={task.id} completed={task.completed}>
            <Title>{task.title}</Title>
            <Pomodoros>Pomodoros: {task.pomodoros}</Pomodoros>
            <CompleteButton onClick={() => handleTaskCompletion(task.id)}>
              {task.completed ? 'Undo' : 'Complete'}
            </CompleteButton>
          </TaskItem>
        ))}
      </TaskList>
    </Container>
  );
};

export default PomodoroTaskManager;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const FormContainer = styled.div`
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;

  h2 {
    margin-top: 0;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 1rem;
  }

  button {
    background-color: #4caf50;
    color: #ffffff;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #45a049;
    }
  }
`;

const TaskList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const TaskItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  background-color: ${({ completed }) => (completed ? '#f2f2f2' : '#ffffff')};
  color: ${({ completed }) => (completed ? '#808080' : 'inherit')};
`;

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Pomodoros = styled.div`
  font-size: 0.9rem;
  color: #808080;
`;

const CompleteButton = styled.button`
  background-color: ${({ completed }) => (completed ? '#808080' : '#4caf50')};
  color: #ffffff;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ completed }) => (completed ? '#606060' : '#45a049')};
  }
`;