import { createContext, useEffect, useState } from "react";
import { getTimezones } from "../api/api";
import { ClockContextProps } from "./ClockContextPropsType";

export const TimezoneContext = createContext({timezones:[]});

const TimezoneContextProvider = ({children}: ClockContextProps) =>{
  const [timezones, setTimezones] = useState([]);

  useEffect(() =>{
    getTimezones().then(tz =>{
      // setTimezones(tz)
    })
  }, [])

  return <TimezoneContext.Provider value={{timezones}}>
    {children}
  </TimezoneContext.Provider>
}
export default TimezoneContextProvider;