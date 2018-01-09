from ..serializers import QuizzSerializer
from ..adapter import QuizzAdapter


class QuizzServices:
    def __init__(self):
        self.quizz_adapter = QuizzAdapter()

    def get_quizz_by_episode_id(self, episode_id):
        quizzs = self.quizz_adapter.get_random_quizz(episode_id)

        serializer = QuizzSerializer(quizzs, many=True)
        return serializer.data