from django.urls import path

from . import views

app_name = 'paint'
urlpatterns = [
    path('', views.index, name='index'),
    path('editor/', views.editor, name='editor'),
    path('editor/postpic/', views.postpic, name='postpic'),
]
