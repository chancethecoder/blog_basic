from django.conf import settings
from django.db import models
from django.utils import timezone

class Post(models.Model):
    # 모델의 필드들을 정의하는 코드입니다.
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=128)
    body = models.TextField()
    image_url = models.URLField(max_length=200, null=True)
    created_at = models.DateTimeField(default=timezone.now)
    published_at = models.DateTimeField(blank=True, null=True)

    # 모델의 메소드들을 정의하는 코드입니다.
    def publish(self):
        self.published_at = timezone.now()
        self.save()

    def __str__(self):
        return self.title