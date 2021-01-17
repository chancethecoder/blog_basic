import requests
import json
from django.shortcuts import render
from django.core import serializers
from django.http import HttpResponse
from .models import Post

def index(request):
    paging_from = request.GET.get('from', 0)
    paging_to = request.GET.get('to', 4)

    # 모델로부터 포스트 가져오기
    # id의 인덱스에서 범위를 지정하여 매칭되는 것들을 반환
    posts = Post.objects.filter(id__range=[paging_from, paging_to])

    context = {
        'posts': posts
    }

    payload = serializers.serialize('json', posts)

    # return render(request, 'index.html', context)
    return HttpResponse(payload, content_type='application/json')

def get(request, id):
    post = Post.objects.get(id=id) # 지정된 아이디에 해당하는 포스트 가져오기

    context = {
        'post': post
    }

    return render(request, 'get.html', context)