from rest_framework import serializers

from ..models import Episode


class BaseEpisodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Episode
        # fields = '__all__'
        exclude = ('created_at', 'updated_at')
