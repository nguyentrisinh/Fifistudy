from rest_framework.authentication import TokenAuthentication
from datetime import datetime, timedelta
import pytz

from ..infrastructures import ApiCustomException
from ..constant import ErrorDefine, Constant
from ..models import AuthUser


class FifiUserTokenAuthentication(TokenAuthentication):
    constant = Constant()

    def authenticate_credentials(self, key):
        try:
            auth_user = AuthUser.objects.get(token=key)

        except AuthUser.DoesNotExist:
            raise ApiCustomException(ErrorDefine.INVALID_TOKEN)

        if auth_user.user_id.status == 0:
            raise ApiCustomException(ErrorDefine.USER_INACTIVE)

        # This is required for the time comparison
        utc_now = datetime.utcnow()
        utc_now = utc_now.replace(tzinfo=pytz.utc)

        if auth_user.updated_at < utc_now - timedelta(seconds=self.constant.get_token_expired_time()):
            raise ApiCustomException(ErrorDefine.TOKEN_EXPIRED)

        return auth_user.user_id, auth_user