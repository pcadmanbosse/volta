import { createContext, useEffect, useState } from "react";
import { ClockContextProps } from "./ClockContextPropsType";

export const ClockContext = createContext({time: "0:0:0", online: false});

const ClockContextProvider = ({children}: ClockContextProps) =>{
  const [time, setTime] = useState("0:0:0");
  const [online, setOnline] = useState(false);

  useEffect(() =>{
    const ws = new WebSocket("ws://localhost:8000/ws");

    ws.onopen = () =>{
      setOnline(true);
    }

    ws.onclose = () =>{
      setOnline(false);
    }

    ws.onmessage = (event) =>{
      setTime(JSON.parse(event.data).time);
    };

    return () =>{
      ws.close();
    }
  }, []);

  return <ClockContext.Provider value={{time, online}}>
    {children}
  </ClockContext.Provider>
}
export default ClockContextProvider;