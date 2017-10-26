from rest_framework import serializers

from ..models import Film


class BaseFilmSerializer(serializers.ModelSerializer):
    class Meta:
        model = Film
        fields = '__all__'


class HomepageListFilmSerializer(serializers.ModelSerializer):
    is_saved = serializers.BooleanField()

    class Meta:
        model = Film
        fields = '__all__'



