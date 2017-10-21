# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

from .models import Blog, Category, FifiUser, Film, Note, Promote, Type

# Register your models here.
admin.site.register(Blog)
admin.site.register(Category)
admin.site.register(FifiUser)
admin.site.register(Film)
admin.site.register(Note)
admin.site.register(Promote)
admin.site.register(Type)