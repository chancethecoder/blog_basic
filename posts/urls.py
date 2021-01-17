from django.urls import path

from . import views

# localhost:8000/posts
# localhost:8000/api/posts

urlpatterns = [
    path('<int:id>', views.get), # <-- /posts/1 에 해당하는 route입니다. 1이 id에 int 타입으로 매핑되어 views.get 메소드로 전달됩니다.
    path('', views.index),       # <-- /posts/ 에 해당하는 route입니다.
]