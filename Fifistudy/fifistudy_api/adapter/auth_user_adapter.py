from ..models import AuthUser
from ..infrastructures import ApiCustomException
from ..constant import ErrorDefine


class AuthUserAdapter:
    def __init__(self):
        pass

    def create_or_update(self, user, token):
        try:
            auth_user = AuthUser.objects.get(user_id=user)

            auth_user.token = token
            auth_user.save()

            return auth_user
        except AuthUser.DoesNotExist:
            auth_user = AuthUser(user_id=user, token=token)

            auth_user.save()

            return auth_user
