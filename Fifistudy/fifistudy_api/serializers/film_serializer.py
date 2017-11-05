from rest_framework import serializers

from ..models import Film, UserSaveFilm
from .episode_serializer import BaseEpisodeSerializer


class BaseFilmSerializer(serializers.ModelSerializer):
    class Meta:
        model = Film
        fields = '__all__'


class HomepageListFilmSerializer(serializers.ModelSerializer):
    is_saved = serializers.BooleanField()

    class Meta:
        model = Film
        fields = '__all__'


class FilmDetailSerializer(serializers.ModelSerializer):
    is_saved = serializers.BooleanField()
    episodes = BaseEpisodeSerializer(many=True)

    class Meta:
        model = Film
        fields = '__all__'





