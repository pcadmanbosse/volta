import { useContext } from "react";
import { ClockContext } from "../contexts/ClockContext";
import styled from "styled-components";

const ClockBase = styled("div")`
  border-radius: 50%;
  width: 50vh;
  height: 50vh;
  border: 1px black solid;
`

const ClockContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`

interface HandleProps {
  $angle: string
}
const Handle = styled("div")<HandleProps>`
  width: 15vh;
  height: 3px;
  background: black;
  position: relative;
  top: 50%;
  left: 50%;
  transform: rotate(${(props) => props.$angle}deg);
  transform-origin: left center;
`

const Clock = () =>{
  const {time, online} = useContext(ClockContext);
  if(!online){
    return <div>Loading...</div>
  }
  return <ClockContainer><ClockBase>
    <Handle $angle="0"/>
    <Handle $angle="45"/>
    <Handle $angle="20"/>
  
  </ClockBase><div>{time}</div></ClockContainer>
}

export default Clock;