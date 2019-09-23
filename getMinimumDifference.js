function getCharCounts(a) {
    var countObject = {};

    for (var i = 0; i < a.length; i++) {

        if (a[i].length !== b[i])

        for (var j = 0; j < a[i].length; j++) {
            countObject[a[i][j]] = (countObject[a[i][j]] || 0) + 1;
        }
    }

    return countObject;
}

function checkPairs (object1, object2) {

    var charArray1 = [];
    var charArray2 = [];
    var counter = 0;
    var maxNum;

    charArray1 = Object.getOwnPropertyNames(object1).sort();
    console.log(charArray1);
    charArray2 = Object.getOwnPropertyNames(object2).sort();
    console.log(charArray2);
    if (charArray1.length < charArray2.length) {
        maxNum = charArray2.length;
    } else {
        maxNum = charArray1.length;
    }

    for (var i = 0; i < maxNum; i++) {
        if (charArray1[i] == undefined || charArray2[i] == undefined || Math.abs(charArray1[i].charCodeAt() - charArray2[i].charCodeAt()) !== 0) {
            counter = counter + 1;
        } else {
            counter = counter + 0;
        }
    }

    return counter;

}

function getMinimumDifference (a, b) {

    var integerArray = [];
    var difference = 0;

    for (var i = 0; i < a.length; i++) {
        if (a[i].length !== b[i].length) {
            integerArray.push(-1);
        } else {
            var charCountsA = getCharCounts(a[i]);
            var charCountsB = getCharCounts(b[i]);
            difference = checkPairs(charCountsA, charCountsB);
            integerArray.push(difference)
        }
    }

    console.log(integerArray);

}

var a = ["abba", "baba", "jk", "bdnm", "lion"];
var b = ["baab", "bbca", "kj", "jwu", "ntel"];

getMinimumDifference(a,b);