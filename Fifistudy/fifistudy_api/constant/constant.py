class Constant:

    def __init__(self):
        pass

    PAGE_RECORDS_NUMBER = 10

    # hours
    TOKEN_EXPIRED_TIME = 24

    def get_token_expired_time(self):
        seconds = self.TOKEN_EXPIRED_TIME * 3600
        return seconds

