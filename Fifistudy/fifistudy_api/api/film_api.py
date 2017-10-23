from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import AllowAny, DjangoModelPermissions
from django.conf.urls import url, include

from .api_base import ApiBase
from ..models import Film
from ..serializers import BaseFilmSerializer
from ..services import FilmServices


class FilmViewSet(ModelViewSet, ApiBase):
    queryset = Film.objects.all().order_by('-updated_at')
    serializer_class = (BaseFilmSerializer,)

    # services
    film_services = FilmServices()

    @classmethod
    def get_router(cls):
        urlpatterns = [
            url(r'^get_all_order_by_view/$', cls.as_view({
                'get': 'get_homepage_list_order_by_view'
            })),
            url(r'^get_all_order_by_save_number/$', cls.as_view({
                'get': 'get_homepage_list_order_by_save_number'
            }))
        ]

        return urlpatterns

    def get_homepage_list_order_by_view(self, request, *args, **kwargs):
        result = self.film_services.get_list_order_by_view()

        return self.as_success(result)

    def get_homepage_list_order_by_save_number(self, request, *args, **kwargs):
        result = self.film_services.get_list_order_by_save_number()

        return self.as_success(result)
