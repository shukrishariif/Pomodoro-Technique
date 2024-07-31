import styled from "styled-components";
import Model from "./components/Modell/Model";
import Tags from "./components/Tags/Tags";
import Timer from "./components/Timer/Timer";
import { useState } from "react";
import { FaCogs } from "react-icons/fa";
import Todo from "./components/Todo/components/AddTaskForm";
import TodoApp from "./TodoApp";
import TaskProvider from "./context/TaskProvider";
import Footer from './components/Footer'
import MainFooter from './components/MainFooter';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editedTask, setEditedTask] = useState("");
  const [pomodoroTimer, setPomodoroTimer] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [finishTime, setFinishTime] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };
  const onOpen = () => {
    setIsOpen(true);
  };

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

  const startPomodoro = () => {
    setStartTime(new Date());
    setIsRunning(true);
  };

  const takeBreak = () => {
    setFinishTime(new Date());
    setIsRunning(false);
  };

  return (
    <>
      <Model isOpen={isOpen} onClose={onClose} />
      <Title>Pomodoro</Title>
      <Tags />
      <Timer />
      {/* Setting Icon */}
      <CogIcon onClick={onOpen}>
        <FaCogs />
      </CogIcon>
      <TaskProvider>
        <TodoApp />
      </TaskProvider>
      <Todo />
      <Footer /> 
      <MainFooter />
    
    </>
  );
}

export default App;

const Title = styled.h1`
  font-size: 4rem;
  padding: 1rem;
  text-align: center;
`;

const CogIcon = styled.div`
  display: flex;
  justify-content: center;
  font-size: 5rem;
`;
