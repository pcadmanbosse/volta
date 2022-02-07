import { useCallback, useContext, useEffect, useState } from "react";
import Select, { SingleValue } from "react-select";
import { TimezoneContext } from "../../contexts/TimezoneContext";

type TimezoneOption ={
  value: string,
  label: string
}

const TimezoneSelector = () =>{
  const {timezones, selectedTimezone, setSelectedTimezone} = useContext(TimezoneContext);
  const [timezoneOptions, setTimezoneOptions] = useState<TimezoneOption[]>([]);

  useEffect(() =>{
    setTimezoneOptions(timezones.map((tz:string) => ({value: tz, label: tz})))
  }, [timezones]);
  const onTimezoneSelected = useCallback((timezone: SingleValue<TimezoneOption>) =>{
    if(timezone){
      setSelectedTimezone(timezone.value);
    }
  }, [setSelectedTimezone]);
  return <Select options={timezoneOptions} onChange={onTimezoneSelected} value={{label:selectedTimezone, value:selectedTimezone}}/>
}

export default TimezoneSelector;