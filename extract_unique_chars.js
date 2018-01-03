// Write a JavaScript function to extract unique characters from a string.

function extractUnique(string) {
	const strArr = string.split('')
    return Array.from(new Set(strArr)).join('')
}

