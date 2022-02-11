import { memo } from "react";
import styled from "styled-components";

interface ClockElementProps {
  $angle: number
}

const Handle = styled("div")<ClockElementProps>`
  position: absolute;
  top: 50%;
  height: 1px;
  left: 50%;
  transform: rotate(${(props) => props.$angle}deg);
  transform-origin: left;
`;


const Hours = memo(styled(Handle)`
  width: 12vh;
  height: 3px;
  background: black;
`)

const Minutes = memo(styled(Handle)`
  width: 17vh;
  background: black;`);

const Seconds = memo(styled(Handle)`
  background: red;
  width: 18vh;
`);

export {Hours, Minutes, Seconds}