from django.db import models

from .film import Film
from .fifi_user import FifiUser


class UserSaveFilm(models.Model):
    objects = models.Manager()

    film_id = models.ForeignKey(Film, on_delete=models.CASCADE)
    user_id = models.ForeignKey(FifiUser, on_delete=models.CASCADE)

    created_at = models.DateTimeField(auto_now_add=True, auto_now=False, editable=False)
    updated_at = models.DateTimeField(auto_now=True, editable=True)

    def __str__(self):
        return '{}/{} - {}'.format(self.id, self.film_id.english_name, self.user_id.id)