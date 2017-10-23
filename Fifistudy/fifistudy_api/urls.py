from rest_framework.routers import DefaultRouter
from django.conf.urls import url, include

from .api import StartupViewSet, PromoteViewSet

urlpatterns = [
    url(r'^startup/', include(StartupViewSet.get_router(), namespace='startup')),
    url(r'^promotes/', include(PromoteViewSet.get_router(), namespace='promote')),
]
