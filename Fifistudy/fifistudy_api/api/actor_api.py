from rest_framework.viewsets import ModelViewSet
from django.conf.urls import url, include
from rest_framework.permissions import AllowAny, DjangoModelPermissions

from .api_base import ApiBase
from ..models import Actor
from ..serializers import BaseActorSerializer
from ..services import ActorServices


class ActorViewSet(ModelViewSet, ApiBase):
    authentication_classes = (AllowAny,)

    queryset = Actor.objects.all().order_by('-updated_at')
    serializer_class = BaseActorSerializer

    # services
    actor_services = ActorServices()

    @classmethod
    def get_router(cls):
        urlpatterns = [
            url(r'^film/(?P<film_id>[0-9]+)$', cls.as_view({
                'get': 'get_list_by_film_id'
            })),
        ]

        return urlpatterns

    def get_serializer_class(self):

        return BaseActorSerializer

    def get_list_by_film_id(self, request, *args, **kwargs):
        film_id = kwargs['film_id']

        result = self.actor_services.get_list_by_film_id(film_id)

        return self.as_success(result)
