from fastapi import FastAPI, WebSocket
import json
import time_service
import time
app = FastAPI()


@app.get("/timezones")
async def root():
    return timeservice_get_timezones()


@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        time.sleep(1)
        await websocket.send_json({"time": time_service.get_time("Europe/Paris")})
