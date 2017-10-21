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


