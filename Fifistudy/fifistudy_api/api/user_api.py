from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import AllowAny
from django.conf.urls import url

from .api_base import ApiBase
from ..models import FifiUser
from ..serializers import BaseFifiUserSerializer, FifiUserProfileSerializer
from ..services import UserServices
from ..utils import FifiUserTokenAuthentication


class UserViewSet(ModelViewSet, ApiBase):
    queryset = FifiUser.objects.all().order_by('-updated_at')
    serializer_class = FifiUserProfileSerializer
    authentication_classes = (FifiUserTokenAuthentication,)

    # services
    fifi_user_services = UserServices()

    @classmethod
    def get_router(cls):
        urlpatterns = [
            url(r'^get_current/$', cls.as_view({
                'get': 'get_current'
            })),
        ]

        return urlpatterns

    def get_current(self, request, *args, **kwargs):
        fifi_user = self.check_anonymous(request)

        result = self.fifi_user_services.get_current(fifi_user)
        return self.as_success(result)