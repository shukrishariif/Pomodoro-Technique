import styled from "styled-components";
import Model from "./components/Model/Model";
import Tags from "./components/Tags/Tags";
import Timer from "./components/Timer/Timer";
import { useState } from "react";
import { FaCogs } from "react-icons/fa";
import TaskManager from "./components/TaskManager/TaskManager";


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };
  const onOpen = () => {
    setIsOpen(true);
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
      <TaskManager />

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