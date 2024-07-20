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