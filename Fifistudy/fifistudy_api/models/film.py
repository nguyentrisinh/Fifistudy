from django.db import models

from ..constant import DIFFICULT_LEVEL


class Film(models.Model):
    objects = models.Manager()

    english_name = models.CharField(max_length=254, null=False, blank=False)
    vietnamese_name = models.CharField(max_length=254, null=False, blank=False)
    slug = models.CharField(max_length=254, null=False, blank=False, unique=True)
    difficult_level = models.PositiveSmallIntegerField(choices=DIFFICULT_LEVEL)
    description = models.TextField(blank=True, null=True)
    thumbnail = models.ImageField(upload_to='film/thumbnail/')
    average_score = models.FloatField(null=True, default=0)
    review_number = models.IntegerField(default=0)
    duration = models.CharField(max_length=70, blank=True, null=True)
    # Total episode number of season
    episode_number = models.IntegerField(default=0)
    # Number of episode on system
    episode_count = models.IntegerField(default=0)
    # save number
    save_number = models.IntegerField(default=0)
    view_number = models.IntegerField(default=0)

    created_at = models.DateTimeField(auto_now_add=True, auto_now=False, editable=False)
    updated_at = models.DateTimeField(auto_now=True, editable=True)

    def __str__(self):
        return '{}/{}'.format(self.id, self.english_name)

    def increase_view_number(self):
        self.view_number += 1
        self.save()


