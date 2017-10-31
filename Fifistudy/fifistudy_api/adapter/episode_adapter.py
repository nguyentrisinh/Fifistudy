from ..models import Episode, UserWatchEpisode
from ..infrastructures import ApiCustomException
from ..constant import ErrorDefine


class EpisodeAdapter:
    def __init__(self):
        pass

    def get_user_watch_episode_by_user_and_epsiode_id(self, episode, user=None):
        if user is None:
            return None

        user_watch_episode = UserWatchEpisode.objects.filter(user_id=user, episode_id=episode)

        if user_watch_episode.exists():
            return user_watch_episode.first()

        return None

    def get_by_id(self, episode_id, user=None):
        try:
            episode = Episode.objects.get(id=episode_id)

            episode.user_watch_episode = self.get_user_watch_episode_by_user_and_epsiode_id(episode, user)

            return episode
        except Episode.DoesNotExist:
            raise ApiCustomException(ErrorDefine.EPISODE_NOT_EXIST)
