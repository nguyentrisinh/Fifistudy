# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-10-25 06:50
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fifistudy_api', '0007_auto_20171023_1525'),
    ]

    operations = [
        migrations.AddField(
            model_name='film',
            name='slug',
            field=models.CharField(default=b'', max_length=254),
        ),
    ]