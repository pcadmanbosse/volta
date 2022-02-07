import { createContext, useEffect, useState } from "react";
import { getTimezones } from "../api/api";
import { ContextProps } from "./ContextPropType";

export const TimezoneContext = createContext({timezones:[], selectedTimezone: 'Europe/Paris', setSelectedTimezone: (val: string) =>{}});

const TimezoneContextProvider = ({children}: ContextProps) =>{
  const [timezones, setTimezones] = useState([]);
  const [selectedTimezone, setSelectedTimezone] = useState("Europe/Paris");
  
  useEffect(() =>{
    getTimezones().then(tz =>{
      setTimezones(tz.data);
    })
  }, [])

  return <TimezoneContext.Provider value={{timezones, selectedTimezone, setSelectedTimezone}}>
    {children}
  </TimezoneContext.Provider>
}
export default TimezoneContextProvider;