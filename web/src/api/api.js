import axios from "axios";

const serverUrl = process.env.REACT_APP_SERVER_URL;

export const getTimezones = async () =>{
  const timezones = await axios.get(`http://${serverUrl}/timezones`);
  return timezones;
}

export const getTimeWebsocket = () =>{
  const ws = new WebSocket(`ws://${serverUrl}/ws`);
  return ws;
}