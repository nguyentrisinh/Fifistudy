from django.db import models

from .film import Film


class Episode(models.Model):
    objects = models.Manager()

    number = models.CharField(max_length=10, blank=False, null=False)
    name = models.CharField(max_length=150, blank=False, null=False)
    description = models.TextField(blank=True, null=True)
    video = models.CharField(max_length=255, blank=False, null=False)
    sub = models.FileField(upload_to='episode/sub/')
    thumbnail = models.ImageField(upload_to='episode/thumbnail/')

    film_id = models.ForeignKey(Film, on_delete=models.CASCADE)

    created_at = models.DateTimeField(auto_now_add=True, auto_now=False, editable=False)
    updated_at = models.DateTimeField(auto_now=True, editable=True)

    def __str__(self):
        id = self.id
        film_name = self.film_id.english_name
        number = self.number
        name = self.name
        return '{}/{}: {} - {}'.format(id, film_name, number, name)