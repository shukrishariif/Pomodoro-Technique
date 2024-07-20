import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import { FaWindowClose } from "react-icons/fa";
import {Formik, Form,Field} from "formik";
import { StateContext } from "../StateProvider";
import { useContext } from "react";
const ModelContainer = ({isOpen, onClose}) =>{
    const {
        workTime, 
        setWorkTime ,
        shortBreakTime,
        setShortBreakTime,
        longBreakTime, 
        setLongBreakTime,
    } = useContext(StateContext);

    return (
        <Container>
            <ModelContent 
                initial={{ y:"-100vh", scale: 0 }}
                animate={{ y: 0, scale: 1 }} 
                exit={{ y:"-100vh", scale: 0 }}>
                <ModelHeader>
                    <ModelTitle> Setting </ModelTitle>
                    <ModalCloseButton onClick={onClose}>
                        <FaWindowClose fontSize="5rem"  />
                    </ModalCloseButton>
                </ModelHeader>
                <ModalBody>
                    <Formik initialValues={{
                        Work: workTime / 60,
                        Short: shortBreakTime / 60,
                        Long: longBreakTime / 60,
                    }} 
                    onSubmit={(values)=> {
                        setWorkTime(values.Work * 60);
                        setShortBreakTime(values.Short * 60);
                        setLongBreakTime (values.Long * 60);
                        onClose();
                    }}>
                        <Form> 
                            <InputWrapper>
                                <FormControl>
                                    <label htmlFor="Work">Work</label>
                                    <Field name="Work" min="1" max="60" />
                                </FormControl>
                                <FormControl>
                                    <label htmlFor="Short">Short Break</label>
                                    <Field name="Short" min="1" max="60" />
                                </FormControl>
                                <FormControl>
                                    <label htmlFor="Long">Long Break</label>
                                    <Field name="Long" min="1" max="60" />
                                </FormControl>
                            </InputWrapper> 
                            <ButtonWrapper>
                                <ApplyButton type="submit">Apply</ApplyButton>           
                            </ButtonWrapper>    
                        </Form>
                    </Formik>
                </ModalBody>
            </ModelContent>
        </Container>
    );
};
export default ModelContainer;
const ButtonWrapper =styled.div`
display: flex;
justify-content: flex-end;
padding: 2rem;
`;
const ApplyButton =styled.button`
all: unset;
padding: 1rem 4rem;
font-size: 2rem;
background: ${(props) => props.theme.colors.Primary};
border-radius: 0.5rem ;
`;

const InputWrapper =styled.div`
display:flex;
padding: 1rem;
gap: 2rem;

`;
 const FormControl =styled.div`
 flex: 1;
width: 100%;
 display: flex;
 flex-direction:column;
 color: black;
 gap: 0.7rem;
 label{
    font-size: 2rem;

 }
 input{
    width: 100%;
    font-size: 2rem;
    padding: 1rem;
    border-radius: 1rem;
    border: 1px solid black;
    background-color: #ead8fc;
 }
 `;


 const Container=styled.div`
 position:absolute;
 height: 100vh;
 width: 100vh;
 display: grid;
 place-items:center;
 z-index: 150;
 `;
 const ModelContent = styled(motion.div)`
 width: 60rem;
 height: 40rem;
background-color : #faf9f8 ;
@media (max-width: 600px) {
    width:90%;
   padding: 1rem;
}
 
 `;
 const ModelHeader= styled.div`
 color: black;
 padding: 2rem;
 display: flex;
 justify-content: space-between;
 border-bottom:1px solid black;

 
 `;
 const ModelTitle =styled.h3`
 font-size: 5rem;
 `;
 const ModalCloseButton =styled.button`
 all: unset;
 
 `;
const ModalBody =styled.div``;