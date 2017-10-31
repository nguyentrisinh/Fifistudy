from ..adapter import EpisodeAdapter
from ..serializers import BaseEpisodeSerializer, BaseUserWatchEpisodeSerializer, EpisodeDetailSerializer
from ..infrastructures import ApiCustomException
from ..constant import ErrorDefine


class EpisodeServices:
    def __init__(self):
        self.episode_adapter = EpisodeAdapter()

    def increase_view_number(self, episode):
        episode.film_id.increase_view_number()

    def get_by_id(self, episode_id, slug, user=None):
        episode = self.episode_adapter.get_by_id(episode_id, user)

        if episode.film_id.slug != slug:
            raise ApiCustomException(ErrorDefine.EPISODE_NOT_EXIST)

        serializer = EpisodeDetailSerializer(episode)

        self.increase_view_number(episode)

        return serializer.data
