// initialize variable reverse of type string as null
// loop over the string length 
// use charAt to retrieve characters starting at the last letter in the string
// concat character to the end of the reverse vaiable

const reverseString = function(string) {
    let reverse = '';

    for (i = 0; i <= string.length; i++) {
        reverse += string.charAt(string.length - i);
    }

    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
