function getMiddle(stringalang){
    if (stringalang.length % 2 === 0){
        return stringalang.charAt(stringalang.length / 2 - 1) + stringalang.charAt(stringalang.length / 2);
    }
    if (stringalang.length % 2 !== 0){
        return stringalang.charAt(stringalang.length / 2);
    }
}

console.log(getMiddle('striing'))


function test(yup){
    return yup;
}

console.log(test("yeah"));