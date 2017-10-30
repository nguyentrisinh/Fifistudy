from ..infrastructures import ApiErrorMessage


class ErrorDefine:
    def __init__(self):
        pass

    # Error Default: 9999

    # Error Auth: 10xx
    LOGIN_FAIL = ApiErrorMessage('login fail', 1000)
    INVALID_TOKEN = ApiErrorMessage('Invalid token', 1001)
    USER_INACTIVE = ApiErrorMessage('User inactive or deleted', 1002)
    TOKEN_EXPIRED = ApiErrorMessage('Token has expired', 1003)
    USER_NOT_FOUND = ApiErrorMessage('User not found', 1004)
    USER_ALREADY_EXISTS = ApiErrorMessage('User have already existed', 1005)
    MISSING_TOKEN = ApiErrorMessage('Missing token', 1006)

    # Error film: 11xx
    FILM_NOT_FOUND = ApiErrorMessage('Film not found', 1100)

    # Error User: 12xx
    USER_USERNAME_EXIST = ApiErrorMessage('Username have already existed', 1200)
    USER_EMAIL_EXIST = ApiErrorMessage('Email have already existed', 1201)
    PASSWORD_DO_NOT_MATCH_CONFIRM_PASSWORD = ApiErrorMessage('Password does not match confirm password', 1202)
    PIN_INCORRECT = ApiErrorMessage('Pin incorrect', 1203)
    USER_ALREADY_ACTIVE = ApiErrorMessage('User alreay active', 1204)
    GENDER_INVALID = ApiErrorMessage('Use\'s gender invalid', 1205)


