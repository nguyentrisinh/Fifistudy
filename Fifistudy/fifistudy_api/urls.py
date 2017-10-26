from rest_framework.routers import DefaultRouter
from django.conf.urls import url, include

from .api import StartupViewSet, PromoteViewSet, FilmViewSet, AuthViewSet, ActorViewSet, UserViewSet

urlpatterns = [
    url(r'^startup/', include(StartupViewSet.get_router(), namespace='startup')),
    url(r'^promotes/', include(PromoteViewSet.get_router(), namespace='promote')),
    url(r'^films/', include(FilmViewSet.get_router(), namespace='film')),
    url(r'^auth/', include(AuthViewSet.get_router(), namespace='auth')),
    url(r'^actor/', include(ActorViewSet.get_router(), namespace='actor')),
    url(r'^fifi_user/', include(UserViewSet.get_router(), namespace='fifi user')),
]
