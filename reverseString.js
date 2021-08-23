function reverseString(string){
    const splitString = string.split("");
    const reverseString = splitString.reverse();
    const joinArray = reverseString.join("");
    return joinArray;
}

module.exports = reverseString;