import { useContext, useEffect, useState } from "react";
import { ClockContext } from "../../contexts/ClockContext";
import ClockBackground from '../../resources/clock_background.svg';
import styled from "styled-components";
import { Hours, Minutes, Seconds } from "./Handle";

export type ClockProps = {
  time: number
}

const ClockBase = styled("div")`
  border: 10px black solid;
  border-radius: 50%;
  width: 50vh;
  height: 50vh;
  position: relative;
  background: #fff ${() =>`url(${ClockBackground})`} no-repeat center;
  background-size: 90%;
`

const ClockContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  :after{
    background: black;
    border-radius: 50%;
    content: "";
    position: absolute;
    left: 48.5%;
    top: 48.5%;
    width: 3%;
    height: 3%;
    z-index: 5;
  }
`

const Clock = () =>{
  const {time, online} = useContext(ClockContext);
  
  const [secondsAngle, setSecondsAngle] = useState(0);
  const [minutesAngle, setMinutesAngle] = useState(0);
  const [hoursAngle, setHoursAngle] = useState(0);
 
  useEffect(() =>{
    const [hours, minutes, seconds] = time.split(":").map(val => parseInt(val));
    setHoursAngle((360/12)*((hours%12)-3) + ((360/60)*(minutes)/12));
    setMinutesAngle((360/60)*(minutes-15));
    setSecondsAngle((360/60)*(seconds-15))
  }, [time])
  
  if(!online){
    return <div>Loading...</div>
  }
  return <ClockContainer>
    <ClockBase>
        <Seconds $angle={secondsAngle}/>
        <Minutes $angle={minutesAngle}/>
        <Hours $angle={hoursAngle}/>
    </ClockBase>
  </ClockContainer>
}

export default Clock;