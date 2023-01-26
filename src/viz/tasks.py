import time

from celery import shared_task

from .methods import Method
from .sort import *
from .sortMethodHandler import SortMethodHandler


@shared_task
def getAnimationsTask(method, array):
    time.sleep(2)
    animations = SortMethodHandler.sortAndAnimate(method, array)
    time.sleep(2)
    return animations


@shared_task
def testTask(array):
    time.sleep(5)
    return bubbleSortAnimations(array)
