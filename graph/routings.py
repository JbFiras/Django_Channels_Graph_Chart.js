from django.urls import path

from .consumers import *

ws_urlpatterns = [
    path('ws/graph/', GraphConsumer.as_asgi())
]