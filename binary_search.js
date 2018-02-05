function binarySearch(arr, n) {
    var middle = Math.floor(arr.length / 2)
    if (arr.length == 1 && arr[0] !== n) return 'notfound'
    if (n > arr[middle]) return binarySearch(arr.slice(middle), n)
    if (n < arr[middle]) return binarySearch(arr.slice(0, middle), n)
    if (n == arr[middle]) return n
}