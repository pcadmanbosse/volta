from fastapi import FastAPI, WebSocket
import time_service as time_service
from fastapi.middleware import Middleware
from fastapi.middleware.cors import CORSMiddleware
import asyncio

middleware = [
    Middleware(CORSMiddleware, allow_origins=["*"],
               allow_methods=["*"], allow_headers=["*"], allow_credentials=True)
]

app = FastAPI(middleware=middleware)


@app.get("/timezones")
async def root():
    return time_service.get_timezones()


@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    queue = asyncio.queues.Queue()

    async def consumer(websocket: WebSocket):
        async for tz in websocket.iter_text():
            if(time_service.validate_timezone(tz)):
                queue.put_nowait(tz)

    async def producer(websocket: WebSocket):
        timezone = "Europe/Paris"
        while True:
            if not queue.empty():
                timezone = queue.get_nowait()
            await asyncio.sleep(1)
            await websocket.send_json({"time": time_service.get_time(timezone)})

    await asyncio.gather(
        consumer(websocket),
        producer(websocket),
    )
