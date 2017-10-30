from .film_serializer import BaseFilmSerializer, HomepageListFilmSerializer, FilmDetailSerializer
from .promote_serializer import BasePromoteSerializer, ListPromoteSerializer

# test serializer (NoneAttribute serializer)
from .test_serializer import NoneAttributeSerializer
from .fifi_user_serializer import BaseFifiUserSerializer, LoginSerializer, FifiUserProfileSerializer
from .actor_serializer import BaseActorSerializer, BaseFilmHasActorSerializer, ListFilmHasActorSerializer
from .comment_serializer import BaseCommentSerializer, ListCommentSerializer
from .episode_serializer import BaseEpisodeSerializer
from .signup_serializer import SignupStepOneSerializer, AcitveUserSerializer, SignupStepTwoSerializer, \
    BaseUserSerializer, UpdateAvatarSerializer

