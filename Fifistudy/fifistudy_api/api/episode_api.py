from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import AllowAny, DjangoModelPermissions
from django.conf.urls import url

from .api_base import ApiBase
from ..models import Episode
from ..serializers import BaseEpisodeSerializer, BaseUserWatchEpisodeSerializer, EpisodeDetailSerializer, \
    SaveUserWatchEpisodeSerializer
from ..services import EpisodeServices
from ..utils import FifiUserTokenAuthentication


class EpisodeViewSet(ModelViewSet, ApiBase):
    queryset = Episode.objects.all().order_by('updated_at')
    serializer_class = BaseEpisodeSerializer
    authentication_classes = (FifiUserTokenAuthentication,)

    # services
    episode_services = EpisodeServices()

    @classmethod
    def get_router(cls):
        urlpatterns = [
            url(r'detail/(?P<film_slug>\w+)/(?P<episode_id>[0-9]+)/$', cls.as_view({
                'get': 'get_by_id'
            })),
            url(r'detail_with_auth/(?P<film_slug>\w+)/(?P<episode_id>[0-9]+)/$', cls.as_view({
                'get': 'get_by_id_with_auth'
            })),
            url(r'save_current_time/$', cls.as_view({
                'post': 'save_current_time'
            })),
        ]

        return urlpatterns

    def get_serializer_class(self):
        if self.action == 'save_current_time':
            return SaveUserWatchEpisodeSerializer

        return BaseEpisodeSerializer

    def get_by_id(self, request, *args, **kwargs):
        episode_id = kwargs['episode_id']
        slug = kwargs['film_slug']

        result = self.episode_services.get_by_id(episode_id, slug)

        return self.as_success(result)

    def get_by_id_with_auth(self, request, *args, **kwargs):
        user = self.check_anonymous(request)

        episode_id = kwargs['episode_id']
        slug = kwargs['film_slug']

        result = self.episode_services.get_by_id(episode_id, slug, user)

        return self.as_success(result)

    def save_current_time(self, request, *args, **kwargs):
        user = self.check_anonymous(request)

        serializer = SaveUserWatchEpisodeSerializer(data=request.data)
        serializer.is_valid()

        current_time = request.data['current_time']
        episode_id = request.data['episode_id']

        result = self.episode_services.save_current_time(user, current_time, episode_id)

        return self.as_success(result)