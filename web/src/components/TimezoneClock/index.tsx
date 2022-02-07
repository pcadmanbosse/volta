import styled from "styled-components";
import Alarm from "../Alarm";
import Clock from "../Clock";
import TimezoneSelector from "../TimezoneSelector";

const Background = styled("div")`
background: lightgray;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
width: 100%;
height: 100vh;
`

const TimezonePickerContainer = styled("div")`
  width: 33%;
  display: flex;
  flex-direction: column;
  align-content: center;
`

const TimezoneClock  = () =>{
  return <Background>
    <Clock />
    <TimezonePickerContainer>
    <TimezoneSelector />
    <Alarm />
    </TimezonePickerContainer>
  </Background>
}

export default TimezoneClock;