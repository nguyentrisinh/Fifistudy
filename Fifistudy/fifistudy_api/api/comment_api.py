from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import AllowAny
from django.conf.urls import url

from ..services import CommentServices
from ..models import Comment
from ..serializers import BaseCommentSerializer, ListCommentSerializer
from .api_base import ApiBase
from ..utils import FifiUserTokenAuthentication


class CommentViewSet(ModelViewSet, ApiBase):
    queryset = Comment.objects.all().order_by('-updated_at')
    serializer_class = BaseCommentSerializer
    authentication_classes = (FifiUserTokenAuthentication,)

    # services
    comment_services = CommentServices()

    @classmethod
    def get_router(cls):
        urlpatterns = [
            url(r'^film/(?P<film_slug>\w+)/$', cls.as_view({
                'get': 'get_paging_by_slug'
            })),
            url(r'^film_with_auth/(?P<film_slug>\w+)/$', cls.as_view({
                'get': 'get_paging_by_slug_with_auth'
            }))
        ]

        return urlpatterns

    def get_serializer_class(self):
        return BaseCommentSerializer

    def get_paging_by_slug(self, request, *args, **kwargs):
        slug = kwargs['film_slug']

        page = request.GET.get('page')

        if page is None:
            page = 1

        page = int(page)

        result = self.comment_services.get_paging_by_slug(slug, page)

        return self.as_success(result)

    def get_paging_by_slug_with_auth(self, request, *args, **kwargs):
        user = self.check_anonymous(request)
        slug = kwargs['film_slug']

        page = request.GET.get('page')

        if page is None:
            page = 1

        page = int(page)

        result = self.comment_services.get_paging_by_slug(slug, page, user)

        return self.as_success(result)