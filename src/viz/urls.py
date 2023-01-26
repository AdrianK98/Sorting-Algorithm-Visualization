from django.urls import path

from . import views

urlpatterns = [
    path("bubble/<str:pk>", views.bubbleSort, name="bubbleSort"),
    path("merge/<str:pk>", views.mergeSort, name="mergeSort"),
    path("selection/<str:pk>", views.selectionSort, name="selectionSort"),
    path("radix/<str:pk>", views.radixSort, name="radixSort"),
    path("quick/<str:pk>", views.quickSort, name="quickSort"),
    path("test/", views.testing, name="testing"),
    path("checkstatus/", views.checkStatus, name="checkStatus"),
    path("getresults/", views.getResult, name="getResults"),
    path("", views.startingPage, name="startingPage"),
]
