import styled from "styled-components";
import CircularProgress from "./CircularProgress/CircularProgress";
const Timer = () => {
    return( <TimerContainer>
        <CircularProgress /> 
    </TimerContainer>
    );
};
export default Timer;
const TimerContainer =styled.div`
background: conic-gradient(
    ${(props) => props.theme.colors.secondry},
    ${(props) => props.theme.colors.bg} 150deg,
    ${(props) => props.theme.colors.secondry}

);
    width: 43rem;
    height: 43rem;
    /* background:white; */
    margin: 2rem auto;
    border-radius: 50%;
    display: grid;
    place-items :center;
    box-shadow: -50px -50px 150px rgba(238, 237, 240, 0.74),
    50px -10px 100px rgba(0,0,0,0.5) ;

`;