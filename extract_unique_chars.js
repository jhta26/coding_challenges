// Write a JavaScript function to extract unique characters from a string.

function extractUnique(string) {
    return Array.from(new Set(string)).join('')
}

