from django.db import models

from .comment import Comment
from .fifi_user import FifiUser


class UserLikeComment(models.Model):
    objects = models.Manager()

    user_id = models.ForeignKey(FifiUser, on_delete=models.CASCADE)
    comment_id = models.ForeignKey(Comment, on_delete=models.CASCADE)

    created_at = models.DateTimeField(auto_now_add=True, auto_now=False, editable=False)
    updated_at = models.DateTimeField(auto_now=True, editable=True)

    def __str__(self):
        return '{}/{} - {}'.format(self.id, self.comment_id.id, self.user_id.name)