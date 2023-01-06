from django.urls import path

from . import views

urlpatterns = [
    path("", views.bubbleSort, name="bubbleSort"),
]
