const palindromes = function (string) {
    const lowerString = string.toLowerCase();
    const lowerArray = lowerString.split('');
    const filteredArray = lowerArray.filter(element => (element.toLowerCase() != element.toUpperCase()) ? 1 : 0);
    const strComp = filteredArray.join('');
    return (strComp.split('').reverse().join('') === strComp);
};

// Do not edit below this line
module.exports = palindromes;
