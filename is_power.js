// Determine if the given number is a power of some non-negative integer.

// Example

// For n = 125, the output should be
// isPower(n) = true;
// For n = 72, the output should be
// isPower(n) = false.


var n = 9

function isSumOfConsecutive2(n) {
    var counter = 0
    for (i = 1; i < n / 2 + 1; i++) {
        array = []
        for (j = i + 1; j < n / 2 + 1; j++) {
            array.push(j)
            cumulative = array.reduce((a, b) => a + b)
            simple = i + j
            console.log(i, j, array, cumulative, simple)
            if (cumulative + i == n || simple == n) counter++
        }
    }
    return counter
}
console.log(isSumOfConsecutive2(15))