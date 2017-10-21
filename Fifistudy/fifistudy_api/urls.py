from rest_framework.routers import DefaultRouter
from django.conf.urls import url, include

from .api import StartupViewSet

urlpatterns = [
    url(r'^startup/', include(StartupViewSet.get_router(), namespace='startup'))
]
