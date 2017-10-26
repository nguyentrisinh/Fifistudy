from ..adapter import CommentAdapter
from ..infrastructures import ApiCustomException
from ..constant import ErrorDefine
from ..serializers import BaseCommentSerializer, ListCommentSerializer


class CommentServices:
    def __init__(self):
        self.comment_adapter = CommentAdapter()

    def get_paging_by_slug(self, slug, page, user=None):
        comments = self.comment_adapter.get_paging_list_comment_by_slug(slug=slug, page=page, user=user)

        serializer = ListCommentSerializer(comments, many=True)
        return serializer.data