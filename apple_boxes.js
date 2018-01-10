// You have k apple boxes full of apples. Each square box of size m contains m × m apples. You just noticed two interesting properties about the boxes:

// The smallest box is size 1, the next one is size 2,..., all the way up to size k.
// Boxes that have an odd size contain only yellow apples. Boxes that have an even size contain only red apples.
// Your task is to calculate the difference between the number of red apples and the number of yellow apples.

function appleBoxes(k) {
    if (k == 1) return -1
    var appleArray = []

    for (i = 1; i <= k; i++) {
        appleArray.push(i)
    }
    var yellowApples = appleArray.filter((apple, index) => index % 2 == 0)
    var redApples = appleArray.filter((apple, index) => index % 2 !== 0)
    return redApples.map(a => a * a).reduce((a, b) => a + b) - yellowApples.map(a => a * a).reduce((a, b) => a + b)

}

// function appleBoxes(k) {
//     return k * (k + 1) / (k % 2 ? -2 :  2)
// }

console.log(appleBoxes(5))