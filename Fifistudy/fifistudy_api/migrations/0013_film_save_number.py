# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-10-26 02:50
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fifistudy_api', '0012_film_episode_count'),
    ]

    operations = [
        migrations.AddField(
            model_name='film',
            name='save_number',
            field=models.IntegerField(default=0),
        ),
    ]
