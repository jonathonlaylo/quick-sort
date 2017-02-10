# Quick Sort
> aka "partition-exchange sort"

> Quicksort is a divide and conquer algorithm. Quicksort first divides a large array into two smaller sub-arrays: the low elements and the high elements. Quicksort can then recursively sort the sub-arrays.

Best Case Scenario - O(n log(n))

Average Case Scenario - O(n log(n))

Worst Case Scenario - O(n^2)

## Psuedo code
```
function quickSort(list) {
    pivot
    left
    right
    if list.length = 0
        return 
    for i = 1 to length(list)
        if list[i] < pivot
        left.push(list[i])
    else
        right.push(list[i])
  return quickSort(left).concat(pivot, quickSort(right))
```
