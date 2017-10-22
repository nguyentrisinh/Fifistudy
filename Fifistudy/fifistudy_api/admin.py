# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

from .models import Actor, Answer, Blog, Category, Comment, CommentBlog, Episode, FifiUser, Film, FilmBelongToType,\
    FilmHasActor, Note, Promote, Quizz, Review, Type, UserLikeComment, UserSaveFilm, UserSaveVocabulary, \
    UserWatchEpisode, Vocabulary

# Register your models here.
admin.site.register(Blog)
admin.site.register(Category)
admin.site.register(FifiUser)
admin.site.register(Film)
admin.site.register(Note)
admin.site.register(Promote)
admin.site.register(Type)