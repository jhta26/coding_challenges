// For two strings to be isomorphic, all occurrences of a character in string A can be replaced with another character
// to get string B. The order of the characters must be preserved. There must be one-to-one mapping for ever char of
// string A to every char of string B.


function isomorphic(firstString, secondString) {
    //if they arent the same length, they cant be isomorphic
    if (firstString.length !== secondString.length) return false

    var map = {};

    for (var i = 0; i < firstString.length; i++) {
        //if letter doesnt exist, create a map, map it to that value
        if (map[firstString[i]] === undefined) {
            map[firstString[i]] = secondString[i];
        } else if (map[firstString[i]] !== secondString[i]) {
            return false;
        }

    }
    //return true if all conditions are met
    return true;
}
