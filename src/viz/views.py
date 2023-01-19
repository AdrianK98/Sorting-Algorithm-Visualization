import json
import random

from django.http import HttpResponse
from django.shortcuts import render

from .sort import *


def getValueList():
    randomGeneratedValues = [
        random.randint(10, 9999) for _ in range(300)
    ]  # Generate a random list of integers to sort
    return randomGeneratedValues


def test(request):
    return render(request, "viz/algorithm.html")


def bubbleSort(request):
    originalArr = getValueList()
    arr = originalArr.copy()
    animations = bubbleSortAnimations(arr)
    return render(
        request,
        "viz/bubble.html",
        {"animations": animations, "valueList": originalArr},
    )


def mergeSort(request):
    originalArr = getValueList()
    arr = originalArr.copy()

    # Get merge sort animations
    animations = mergeSortAnimations(arr)

    return render(
        request,
        "viz/merge.html",
        {"valueList": originalArr, "animations": json.dumps(animations)},
    )


def selectionSort(request):
    originalArr = getValueList()
    arr = originalArr.copy()

    # Get selection sort animations
    animations = selectionSortAnimations(arr)

    return render(
        request,
        "viz/selection.html",
        {"valueList": originalArr, "animations": json.dumps(animations)},
    )


def radixSort(request):
    originalArr = getValueList()

    arr = originalArr.copy()

    # Get selection sort animations
    animations = radixSortAnimations(arr)

    return render(
        request,
        "viz/radix.html",
        {"valueList": originalArr, "animations": json.dumps(animations)},
    )


def quickSort(request):
    originalArr = getValueList()

    arr = originalArr.copy()

    # Get selection sort animations
    animations = quickSortAnimations(arr)

    return render(
        request,
        "viz/quick.html",
        {"valueList": originalArr, "animations": json.dumps(animations)},
    )
