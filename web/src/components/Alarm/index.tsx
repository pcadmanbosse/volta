import { memo, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import {BsFillAlarmFill, BsAlarm} from "react-icons/bs";
import TimePicker, {TimePickerValue} from "react-time-picker";
import styled from "styled-components";
import { ClockContext } from "../../contexts/ClockContext";
const AlarmSound = require("../../resources/beep.mp3");

const AlarmContainer = memo(styled("div")`
  display: grid;
  grid-template-columns: 1fr 9fr;
`);

const IconContainer = memo(styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  :hover{
    cursor: pointer;
  }
`);

const Alarm = () =>{
  const [alarmTime, setAlarmTime] = useState<TimePickerValue>("")
  const [on, setOn] = useState(false);
  const [ringing, setRinging] = useState(false);
  const audio = useRef(new Audio(AlarmSound));
  const {time} = useContext(ClockContext);

  useEffect(() =>{
    if((time.substring(0, 5) === alarmTime) && on){
      setRinging(true);
    }
  }, [time, alarmTime, on])

  useEffect(() =>{
    if(ringing){
      audio.current.loop = true;
      audio.current.play();
    }
    else{
      audio.current.pause();
    }
  }, [ringing, audio]);

  const handleClick = useCallback(() =>{
    setOn((previousOn) => !previousOn);
    setRinging(false);
  }, [setOn, setRinging]);

  const Icons = useMemo(() =>
    <IconContainer onClick={handleClick}>
          {on && <BsFillAlarmFill />}
          {!on && <BsAlarm />}
        </IconContainer>
  , [on, handleClick]);

  return <AlarmContainer>
        {Icons}
        <TimePicker disableClock value={alarmTime} onChange={setAlarmTime}/>
      </AlarmContainer>
}

export default Alarm;