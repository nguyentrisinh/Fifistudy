# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-11-26 10:52
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fifistudy_api', '0019_episode_link_video'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='score',
            field=models.FloatField(),
        ),
    ]
