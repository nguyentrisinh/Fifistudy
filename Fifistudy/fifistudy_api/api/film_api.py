from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import AllowAny, DjangoModelPermissions
from django.conf.urls import url, include

from .api_base import ApiBase
from ..models import Film
from ..serializers import BaseFilmSerializer, BaseUserSaveFilmSerializer, UserSaveFilmSerializer
from ..services import FilmServices
from ..utils import FifiUserTokenAuthentication


class FilmViewSet(ModelViewSet, ApiBase):
    queryset = Film.objects.all().order_by('-updated_at')
    serializer_class = BaseFilmSerializer
    authentication_classes = (FifiUserTokenAuthentication,)

    # services
    film_services = FilmServices()

    @classmethod
    def get_router(cls):
        urlpatterns = [
            # get list homepage film order_by view
            url(r'^get_all_order_by_view/$', cls.as_view({
                'get': 'get_homepage_list_order_by_view'
            })),
            url(r'^get_all_order_by_view_with_auth/$', cls.as_view({
                'get': 'get_homepage_list_order_by_view_with_auth'
            })),

            # get list homepage film order_by updated_at
            url(r'^get_all_order_by_updated/$', cls.as_view({
                'get': 'get_homepage_list_order_by_updated'
            })),
            url(r'^get_all_order_by_updated_with_auth/$', cls.as_view({
                'get': 'get_homepage_list_order_by_updated_with_auth'
            })),

            # get list homepage film order_by save_number
            url(r'^get_all_order_by_save_number/$', cls.as_view({
                'get': 'get_homepage_list_order_by_save_number'
            })),
            url(r'^get_all_order_by_save_number_with_auth/$', cls.as_view({
                'get': 'get_homepage_list_order_by_save_number_with_auth'
            })),

            # get film detail by slug
            url(r'^detail/slug/(?P<film_slug>\w+)$', cls.as_view({
                'get': 'get_detail_by_slug'
            })),
            url(r'^detail_with_auth/slug/(?P<film_slug>\w+)$', cls.as_view({
                'get': 'get_detail_by_slug_with_auth'
            })),

            url(r'^get_list_by_difficult_level/(?P<difficult_level>[0-9]+)$', cls.as_view({
                'get': 'get_list_by_difficult_level'
            })),

            url(r'^save_film/$', cls.as_view({
                'post': 'user_save_film'
            }))

            # # get film detail
            # url(r'^detail/(?P<film_id>[0-9]+)$', cls.as_view({
            #     'get': 'get_detail_by_id'
            # })),
            # url(r'^detail_with_auth/(?P<film_id>[0-9]+)$', cls.as_view({
            #     'get': 'get_detail_by_id_with_auth'
            # })),

        ]

        return urlpatterns

    def get_serializer_class(self):
        if self.action == 'user_save_film':
            return UserSaveFilmSerializer

        return BaseFilmSerializer

    def get_homepage_list_order_by_view(self, request, *args, **kwargs):
        result = self.film_services.get_list_order_by_view()

        return self.as_success(result)

    def get_homepage_list_order_by_save_number(self, request, *args, **kwargs):
        result = self.film_services.get_list_order_by_save_number()

        return self.as_success(result)

    def get_homepage_list_order_by_updated(self, request, *args, **kwargs):
        result = self.film_services.get_list_order_by_updated()

        return self.as_success(result)

    # with auth token to check if film that user is saved or not
    def get_homepage_list_order_by_view_with_auth(self, request, *args, **kwargs):
        user = self.check_anonymous(request)
        result = self.film_services.get_list_order_by_view(user=user)

        return self.as_success(result)

    def get_homepage_list_order_by_save_number_with_auth(self, request, *args, **kwargs):
        user = self.check_anonymous(request)
        result = self.film_services.get_list_order_by_save_number(user=user)

        return self.as_success(result)

    def get_homepage_list_order_by_updated_with_auth(self, request, *args, **kwargs):
        user = self.check_anonymous(request)
        result = self.film_services.get_list_order_by_updated(user=user)

        return self.as_success(result)
    # def get_detail_by_id(self, request, *args, **kwargs):
    #     film_id = kwargs['film_id']
    #
    #     result = self.film_services.get_detail_by_id(film_id=film_id)
    #
    #     return self.as_success(result)
    #
    # def get_detail_by_id_with_auth(self, request, *args, **kwargs):
    #     film_id = kwargs['film_id']
    #     user = self.check_anonymous(request)
    #
    #     result = self.film_services.get_detail_by_id(film_id=film_id, user=user)
    #
    #     return self.as_success(result)

    def get_detail_by_slug(self, request, *args, **kwargs):
        slug = kwargs['film_slug']

        result = self.film_services.get_detail_by_slug(slug=slug)

        return self.as_success(result)

    def get_detail_by_slug_with_auth(self, request, *args, **kwargs):
        slug = kwargs['film_slug']
        user = self.check_anonymous(request)

        result = self.film_services.get_detail_by_slug(slug=slug, user=user)

        return self.as_success(result)

    def get_list_by_difficult_level(self, request, *args, **kwargs):
        difficult_level = int(kwargs['difficult_level'])

        result = self.film_services.get_list_by_difficult_level(difficult_level)

        return self.as_success(result)

    def user_save_film(self, request, *args, **kwargs):
        user = self.check_anonymous(request)

        serializer = UserSaveFilmSerializer(data=request.data)
        serializer.is_valid()

        film_id = request.data['film_id']

        result = self.film_services.user_save_film(user, film_id)

        return self.as_success(result)
