from django.db.models import Case, When, Value, Count, BooleanField

from ..models import Film, UserSaveFilm, Episode
from ..serializers import BaseFilmSerializer
from ..infrastructures import ApiCustomException
from ..constant import ErrorDefine

class FilmAdapter:
    def __init__(self):
        pass

    def get_list_order_by_view(self, user=None, begin_record=0, end_record=8):
        if user is not None:
            # check if user is not none, we can check that that film user have already saved or not
            # To-Do list
            films = Film.objects.all().annotate(
                is_saved=Case(
                    When(usersavefilm__user_id=user, then=True),
                    default=False, output_field=BooleanField()
                ),
                save_number=Count('usersavefilm'),
                episode_count = Count('episode')
            ).order_by('-view_number', '-updated_at')[begin_record:end_record]

            return films
        else:
            films = Film.objects.all().annotate(
                is_saved=Case(default=False, output_field=BooleanField()),
                save_number=Count('usersavefilm'),
                episode_count = Count('episode')
            ).order_by('-view_number', '-updated_at')[begin_record:end_record]

            return films

    def get_list_order_by_saved_number(self, user=None, begin_record=0, end_record=8):
        if user is not None:
            films = Film.objects.all().annotate(
                is_saved=Case(
                    When(usersavefilm__user_id=user, then=True),
                    default=False, output_field=BooleanField()
                ),
                save_number=Count('usersavefilm'),
                episode_count=Count('episode'),
            ).order_by('-save_number', '-updated_at')[begin_record:end_record]

            return films
        else:
            films = Film.objects.all().annotate(
                is_saved=Case(default=False, output_field=BooleanField()),
                save_number=Count('usersavefilm'),
                episode_count=Count('episode'),
            ).order_by('-save_number', '-updated_at')[begin_record:end_record]

            return films

    def get_detail_by_id(self, film_id, user=None):
        if user is not None:
            pass
        else:
            try:
                film = Film.objects.get(id=film_id)

                film.is_saved = False

                film.save_number = UserSaveFilm.objects.filter(film_id=film).count()
                film.episode_count = Episode.objects.filter(film_id=film).count()

                return film
            except Film.DoesNotExist:
                raise ApiCustomException(ErrorDefine.FILM_NOT_FOUND)

