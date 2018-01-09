// Given an integer, determine if it is a power of 2. If so, return that number, else return -1. (0 is not a power of two)

function isPowerOfTwo(n) {
    return (n & (n - 1)) === 0
}

