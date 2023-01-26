from .methods import Method
from .sort import *

# sortAlgorithms= {
#     Method.BUBBLE_SORT : bubbleSortAnimations,
#     Method.MERGE_SORT : mergeSortAnimations,
#     Method.SELECTION_SORT : selectionSortAnimations,
#     Method.QUICK_SORT : quickSortAnimations,
#     Method.RADIX_SORT : radixSortAnimations,

# }
sortAlgorithms = {
    "bubbleSort": bubbleSortAnimations,
    "mergeSort": mergeSortAnimations,
    "selectionSort": selectionSortAnimations,
    "quickSort": quickSortAnimations,
    "radixSort": radixSortAnimations,
}


class SortMethodHandler:
    def __init__(self, method):
        self.method = method
        self.is_sorted = False
        self.array = None
        self.animations = None

    def getMethod(self):
        return self.method

    def getArray(self):
        return self.array

    def getAnimations(self):
        return self.animations

    def setAnimations(self, animations):
        self.animations = animations

    @staticmethod
    def sortAndAnimate(method, array):
        animations = sortAlgorithms[method](array)
        return animations
