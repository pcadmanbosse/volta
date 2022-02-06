import axios from "axios";

export const getTimezones = async () =>{
  const timezones = await axios.get("localhost:8000/timezones");
  return timezones;
}