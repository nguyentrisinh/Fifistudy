from django.db.models import Case, When, Value, Count, BooleanField

from ..models import Film
from ..serializers import BaseFilmSerializer


class FilmAdapter:
    def __init__(self):
        pass

    def get_list_order_by_view(self, user=None, begin_record=0, end_record=8):
        if user is not None:
            # check if user is not none, we can check that that film user have already saved or not
            # To-Do list
            pass
        else:
            films = Film.objects.all().annotate(
                is_saved=Case(default=False, output_field=BooleanField()),
                save_number=Count('usersavefilm')
            ).order_by('-view_number', '-updated_at')[begin_record:end_record]

            return films

    def get_list_order_by_saved_number(self, user=None, begin_record=0, end_record=8):
        if user is not None:
            pass
        else:
            films = Film.objects.all().annotate(
                is_saved=Case(default=False, output_field=BooleanField()),
                save_number=Count('usersavefilm')
            ).order_by('-save_number', '-updated_at')[begin_record:end_record]

            return films
