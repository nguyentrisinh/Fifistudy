from rest_framework import serializers

from ..models import Quizz, Answer


class ListAnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = '__all__'


class BaseQuizzSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quizz
        fields = '__all__'


class QuizzSerializer(serializers.ModelSerializer):
    answer_list = ListAnswerSerializer(many=True)

    class Meta:
        model = Quizz
        fields = '__all__'