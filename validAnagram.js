function validAnagram(string1, string2) {
  testArray1 = string1.split("").sort().join(""); //splits the string into an array of characters, sorts the characters alphabetically, and then joins them into one string
  testArray2 = string2.split("").sort().join(""); //the joined string is now one element in the array

  if (testArray1.length != testArray2.length) {
    return "The strings are not the same length, and thus, are not anagrams!";
  };

  for (var i = 0; i < testArray1.length; i++) {
    if (testArray1.charAt(i) != testArray2.charAt(i)) { //checks the character at the given index in the string
      return "The strings do not have the same characters, and thus, are not anagrams!";
    };
  };

return "The strings are anagrams!";
};
