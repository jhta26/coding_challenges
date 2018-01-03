// Implement an algorithm to determine if a string has all unique characters.  What if you cannot use additional data structures?

function allUniqueChars(string) {

    for (var i = 0; i < string.length; i++) {
        for (var j = i + 1; j < string.length; j++) {
        	//Check if all letter match the letter, if they do return false
            if (string[i] === string[j]) {
                return false
            }
        }
    }
    return true
}