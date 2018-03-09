// Write a JavaScript function to extract unique characters from a string.

module.exports =  function extractUnique(string) {
    return Array.from(new Set(string)).join('')
}

