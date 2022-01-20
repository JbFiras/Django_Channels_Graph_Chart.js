import json
from asyncio import sleep
from random import randint
from channels.generic.websocket import AsyncWebsocketConsumer


class GraphConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()
        for i in range(10000):
            await self.send(json.dumps({'value':randint(-30,30)}))
            await sleep(1)