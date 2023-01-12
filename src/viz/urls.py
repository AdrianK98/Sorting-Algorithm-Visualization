from django.urls import path

from . import views

urlpatterns = [
    path("bubble/", views.bubbleSort, name="bubbleSort"),
    path("merge/", views.mergeSort, name="mergeSort"),
    path("selection/", views.selectionSort, name="selectionSort"),
]
