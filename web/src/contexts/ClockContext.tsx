import { createContext, useContext, useEffect, useState } from "react";
import { getTimeWebsocket } from "../api/api";
import { ContextProps } from "./ContextPropType";
import { TimezoneContext } from "./TimezoneContext";

export const ClockContext = createContext({time: "0:0:0", online: false});

const ClockContextProvider = ({children}: ContextProps) =>{
  const [time, setTime] = useState("0:0:0");
  const [online, setOnline] = useState(false);
  const {selectedTimezone} = useContext(TimezoneContext);
  const [webSocket, setWs] = useState<WebSocket>();

  useEffect(() =>{
    if(selectedTimezone && selectedTimezone !== "" && online){
      webSocket?.send(selectedTimezone);
    }
  }, [selectedTimezone, webSocket, online]);

  useEffect(() =>{
    const ws = getTimeWebsocket();

    ws.onopen = () =>{
      setOnline(true);
    }

    ws.onclose = () =>{
      setOnline(false);
    }

    ws.onmessage = (event) =>{
      setTime(JSON.parse(event.data).time);
    };

    setWs(ws);

    return () =>{
      ws.close();
    }
  }, []);

  return <ClockContext.Provider value={{time, online}}>
    {children}
  </ClockContext.Provider>
}
export default ClockContextProvider;