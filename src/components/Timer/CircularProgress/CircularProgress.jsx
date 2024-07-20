// import { useContext, useState } from "react";
import styled from "styled-components";
import { useContext, useEffect} from "react";
import Clock from "./Clock/Clock";
import { StateContext } from "../../StateProvider";
const CircularProgress = () => {
const {progress ,setprogress, time, initTime} = useContext(StateContext);
//200 sec
// 200 /100 ==2
// 200 / 2 ==100
//198 /2=99

useEffect(() => {
    setprogress(time / (initTime /100));
}, [setprogress, time]);

    return(
        <OuterCircle  progress={progress}>
            <InnerCircle>
                <Clock />
            </InnerCircle>
        </OuterCircle>

    );
};
export default CircularProgress;
const OuterCircle= styled.div`

    width: 36rem;
    height: 36rem;
    /* margin: 2rem auto; */
    border-radius: 50%;
    display: grid;
    place-items :center;
    background: conic-gradient(
        red${(props) => props.theme.colors.primary} ${({ progress}) => progress}%,
         transparent ${({ progress })=> progress}%
         );
    
    `;
const InnerCircle = styled.div`
 width: 33rem;
    height: 33rem;
    background:blue;
    margin: 2rem auto;
    background: ${(props) => props.theme.colors.secondry};
    border-radius: 50%;
    display: grid;
    place-items :center;
    
    `;