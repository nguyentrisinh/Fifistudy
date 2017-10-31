from django.db.models import Case, When, Value, Count, BooleanField

from ..models import Film, UserSaveFilm, Episode
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
                )
            ).order_by('-view_number', '-updated_at')[begin_record:end_record]

            return films
        else:
            films = Film.objects.all().annotate(
                is_saved=Case(default=False, output_field=BooleanField()),
            ).order_by('-view_number', '-updated_at')[begin_record:end_record]

            return films

    def get_list_order_by_saved_number(self, user=None, begin_record=0, end_record=8):
        if user is not None:
            films = Film.objects.all().annotate(
                is_saved=Case(
                    When(usersavefilm__user_id=user, then=True),
                    default=False, output_field=BooleanField()
                )
            ).order_by('-save_number', '-updated_at')[begin_record:end_record]

            return films
        else:
            films = Film.objects.all().annotate(
                is_saved=Case(default=False, output_field=BooleanField())
            ).order_by('-save_number', '-updated_at')[begin_record:end_record]

            return films

    def get_detail_by_id(self, film_id, user=None):
        if user is not None:
            try:
                film = Film.objects.get(id=film_id)

                episodes = Episode.objects.filter(film_id=film)
                film.episodes = episodes

                user_save_film = UserSaveFilm.objects.filter(film_id=film, user_id=user)

                if user_save_film.exists():
                    film.is_saved = True
                else:
                    film.is_saved = False

                return film
            except Film.DoesNotExist:
                raise ApiCustomException(ErrorDefine.FILM_NOT_FOUND)
        else:
            try:
                film = Film.objects.get(id=film_id)

                episodes = Episode.objects.filter(film_id=film)
                film.episodes = episodes

                film.is_saved = False

                return film
            except Film.DoesNotExist:
                raise ApiCustomException(ErrorDefine.FILM_NOT_FOUND)

    def get_detail_by_slug(self, slug, user=None):
        if user is not None:
            try:
                film = Film.objects.get(slug=slug)

                episodes = Episode.objects.filter(film_id=film)
                film.episodes = episodes

                user_save_film = UserSaveFilm.objects.filter(film_id=film, user_id=user)

                if user_save_film.exists():
                    film.is_saved = True
                else:
                    film.is_saved = False

                return film
            except Film.DoesNotExist:
                raise ApiCustomException(ErrorDefine.FILM_NOT_FOUND)
        else:
            try:
                film = Film.objects.get(slug=slug)

                episodes = Episode.objects.filter(film_id=film)
                film.episodes = episodes

                film.is_saved = False

                return film
            except Film.DoesNotExist:
                raise ApiCustomException(ErrorDefine.FILM_NOT_FOUND)

    def get_list_by_difficult_level(self, difficult_level, begin_row=0, end_row=6):
        films = Film.objects.filter(difficult_level=difficult_level)[begin_row:end_row]

        return films

    def user_save_film(self, user, film_id):
        try:
            film = Film.objects.get(id=film_id)

            user_save_film = UserSaveFilm.objects.filter(film_id=film, user_id=user)

            if user_save_film.exists():
                user_save_film.first().delete()

                return None

            user_save_film = UserSaveFilm(user_id=user, film_id=film)
            user_save_film.save()

            return user_save_film
        except Film.DoesNotExist:
            raise ApiCustomException(ErrorDefine.FILM_NOT_FOUND)

