// Determine if the given number is a power of some non-negative integer.

// Example

// For n = 125, the output should be
// isPower(n) = true;
// For n = 72, the output should be
// isPower(n) = false.



function isPower(n) {
    if (n == 1) return true;
    for (i = 2; i <= Math.sqrt(n); i++) {
        for (j = 2; Math.pow(i, j) < n; j++)
        if (Math.pow(i, j) == n) return true;
    }
    return false;
}