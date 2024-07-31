import React from "react";
import styled from "styled-components";
import Backdrop from "./Backdrop";
import ModelContainer from "./ModelContainer";
import {AnimatePresence} from "framer-motion"
const Model = ({isOpen, onClose}) =>{
    return (
        <>
        <AnimatePresence>
        {isOpen &&  ( 
            <>
            <Backdrop />
        <ModelContainer isOpen={isOpen} onClose={onClose}/>
        </> 
)}
</AnimatePresence>

        </>
    );
};
export default Model;

export const ModalBackground = styled.div`
  z-index: 10;
  position: absolute;
  margin: 0 -1rem;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: rgba(0, 0, 0, .4);
`;

export const ModalWindow = styled.div`
  z-index: 50;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  background: #fff;
  width: 400px;
  padding: 20px 20px;
  border: none;
  overflow: hidden;
  border-radius: 5px;
  text-align: center;
`;

export const SettingsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
`;

export const SettingsTitle = styled.h4`
  font-size: 18px;
  font-weight: 700;
  color: rgb(198, 198, 198);
`;

export const CloseButton = styled.button`
  border: none;
  background: rgba(255, 255, 255, 1);
  opacity: 0.3;

  &:hover {
    opacity: 0.6;
  }

  img {
    display: flex;
    width: 20px;
  }
`;

export const InputsHeader = styled.h5`
  text-align: left;
  font-size: 16px;
  font-weight: 700;
  color: rgb(78, 78, 78);
`;