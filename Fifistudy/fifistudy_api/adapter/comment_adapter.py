from django.db.models import Q, Case, When, Value, Count, BooleanField

from ..models import Comment, Film, FifiUser
from ..infrastructures import ApiCustomException
from ..constant import ErrorDefine, Constant


class CommentAdapter:
    def __init__(self):
        self.constant = Constant()

    # page begin with 1
    def get_paging_list_comment_by_slug(self, slug, page, user=None):
        if user is not None:
            try:
                film = Film.objects.get(slug=slug)

                begin_row = (page-1) * self.constant.PAGE_RECORDS_NUMBER
                end_row = page * self.constant.PAGE_RECORDS_NUMBER

                comments = Comment.objects.filter(film_id=film).annotate(
                    is_liked=Case(
                        When(userlikecomment__user_id=user, then=True),
                        default=False, output_field=BooleanField()
                    ),
                ).order_by('-updated_at')[begin_row:end_row]

                for comment in comments:
                    comment.username = comment.user_id.username
                    comment.avatar = comment.user_id.avatar.url

                return comments
            except Film.DoesNotExist:
                raise ApiCustomException(ErrorDefine.FILM_NOT_FOUND)
        else:
            try:
                film = Film.objects.get(slug=slug)

                begin_row = (page-1) * self.constant.PAGE_RECORDS_NUMBER
                end_row = page * self.constant.PAGE_RECORDS_NUMBER

                comments = Comment.objects.filter(film_id=film).annotate(
                    is_liked=Case(default=False, output_field=BooleanField()),
                ).order_by('-updated_at')[begin_row:end_row]

                for comment in comments:
                    comment.username = comment.user_id.username
                    comment.avatar = comment.user_id.avatar.url

                return comments
            except Film.DoesNotExist:
                raise ApiCustomException(ErrorDefine.FILM_NOT_FOUND)
