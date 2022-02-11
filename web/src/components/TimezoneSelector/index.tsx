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
  const [selectedOption, setSelectedOption] = useState({value: selectedTimezone, label: selectedTimezone});
  
  useEffect(() =>{
    setTimezoneOptions(timezones.map((tz:string) => ({value: tz, label: tz})))
  }, [timezones]);

  useEffect(() =>{
    setSelectedOption({value: selectedTimezone, label: selectedTimezone})
  }, [selectedTimezone])

  const onTimezoneSelected = useCallback((timezone: SingleValue<TimezoneOption>) =>{
    if(timezone){
      setSelectedTimezone(timezone.value);
    }
  }, [setSelectedTimezone]);

  return <Select options={timezoneOptions} onChange={onTimezoneSelected} value={selectedOption}/>
}

export default TimezoneSelector;