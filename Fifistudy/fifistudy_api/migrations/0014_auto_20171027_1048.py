# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-10-27 03:48
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fifistudy_api', '0013_film_save_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fifiuser',
            name='gender',
            field=models.PositiveSmallIntegerField(blank=True, choices=[(1, b'Male'), (0, b'Female')], null=True),
        ),
    ]
