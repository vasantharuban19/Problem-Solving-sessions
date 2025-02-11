//? Day 3: Strings & String Manipulation
//* Session Focus: Basic string operations, string traversal, and manipulation techniques.

// 1. Count vowels and consonants in a string.
function countVowelsAndConsonants(str) {
  const counter = { vowels: 0, consonants: 0, others: 0 };
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if ((char <= "Z" && char >= "A") || (char <= "z" && char >= "a")) {
      if (
        char == "A" ||
        char == "E" ||
        char == "I" ||
        char == "O" ||
        char == "U" ||
        char == "a" ||
        char == "e" ||
        char == "i" ||
        char == "o" ||
        char == "u"
      ) {
        counter.vowels++;
      } else {
        counter.consonants++;
      }
    } else counter.others++;
  }
  return counter;
}
// console.log(countVowelsAndConsonants('vasanth123'));

// 2. Reverse a string
function reverse(str) {
  let reversedStr = "";
  for (let i = 0; i < str.length; i++) {
    reversedStr = str[i] + reversedStr;
  }
  return reversedStr;
}
// console.log(reverse("Hello World"));

// 3. Convert a string to lowercase/upeercase
function upperCase(str) {
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lower = "abcdefghijklmnopqrstuvwxyz";
  const arr = [];
  for (let ind = 0; ind < str.length; ind++) {
    let currind = lower.indexOf(str[ind]);
    if (currind != -1) {
      arr.push(upper[currind]);
    } else {
      arr.push(str[ind]);
    }
  }
  return arr.join("");
}
console.log(upperCase("vasanth"));

function toUpperCase(str) {
  const arr = [];
  for (let ind = 0; ind < str.length; ind++) {
    if (str[ind] >= "a" && str[ind] <= "z") {
      arr.push(String.fromCharCode(str.charCodeAt(ind) - 32));
    } else {
      arr.push(str[ind]);
    }
  }
  return arr.join("");
}
console.log(toUpperCase("vasanth"));

function lowerCase(str) {
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lower = "abcdefghijklmnopqrstuvwxyz";
  const arr = [];
  for (let ind = 0; ind < str.length; ind++) {
    let currind = upper.indexOf(str[ind]);
    if (currind != -1) {
      arr.push(lower[currind]);
    } else {
      arr.push(str[ind]);
    }
  }
  return arr.join("");
}
console.log(lowerCase("VASANTH"));

function toLowerCase(str) {
  const arr = [];
  for (let ind = 0; ind < str.length; ind++) {
    if (str[ind] >= "A" && str[ind] <= "Z") {
      arr.push(String.fromCharCode(str.charCodeAt(ind) + 32));
    } else {
      arr.push(str[ind]);
    }
  }
  return arr.join("");
}
console.log(toLowerCase("VaSaNtH"));

// 4. Find the longest word in a sentence.
function longestWord(str) {
  let start = 0;
  let maxLen = 0;
  let maxStart = -1;
  let maxEnd = -1;
  let ind = 1;
  for (ind; ind <= str.length; ind++) {
    if (ind == str.length || str[ind] == " ") {
      let len = ind - start;
      if (len > maxLen) {
        maxLen = len;
        maxStart = start;
        maxEnd = ind;
      }
      start = ind + 1;
    }
  }
  return str.substring(maxStart, maxEnd);
}
console.log(longestWord("Hello World! This is a test sentence."));

// 5. Check if a string Palindrome.
// 1st method using while
function isPalindromee(str) {
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str[start] != str[end]) return false;
    start++;
    end--;
  }
  return true;
}
console.log(isPalindromee("A man, a plan, a canal: Panama"));
// 2nd method for loop
function palindrome(str) {
  let reversed = "";
  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }
  return reversed === str;
}
console.log(palindrome("A man, a plan, a canal: Panama"));
// 3rd method
function isPalindrome(str) {
  function isAlpanumeric(char) {
    return (
      (char >= "a" && char <= "z") ||
      (char >= "A" && char <= "Z") ||
      (char >= "0" && char <= "9")
    );
  }
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    while (start < end && !isAlpanumeric(str[start])) start++;
    while (start < end && !isAlpanumeric(str[end])) end--;

    if (str[start].toLowerCase() !== str[end].toLowerCase()) return false;
    start++;
    end--;
  }
  return true;
}
console.log(isPalindrome("A man, a plan, a canal: Panama"));

// 6. Remove duplicates from a string
function removeDuplicates(str) {
  let removedStr = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (removedStr.indexOf(char) == -1) {
      removedStr += char;
    }
  }
  return removedStr;
}
console.log(removeDuplicates("banana"));

// 7. find all substrings of a given string
function findSubStrings(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    let temp = "";
    for (let ind = i; ind < str.length; ind++) {
      temp += str[ind];
      arr.push(temp);
    }
  }
  return arr;
}
console.log(findSubStrings("abc"));

// Practice Question
// 1. Concatenate two strings.
function concatenateString(str1, str2) {
  return str1 + str2;
}
console.log(concatenateString("vasanth", "ruban"));

// 2. Find the frequency of each character in a string.
function charFrequency(str) {
  let freqMap = {};
  for (let char of str) {
    freqMap[char] = (freqMap[char] || 0) + 1;
  }
  return freqMap;
}
console.log(charFrequency("vasanth"));

// 3. Replace spaces in a string with %20.
function replaceSpace(str) {
  return str.split(" ").join("%20");
}
console.log(replaceSpace("h e l l o"));

// 4. Check if a string is an anagram of another
// 1st method sorting
function isAnagram(str1, str2) {
  if (str1.length != str2.length) return false;

  return str1.split("").sort().join("") == str2.split("").sort().join("");
}
console.log(isAnagram("vasanth", "htnasav"));
// 2nd method using frequency
function anagram(str1, str2) {
  if (str1.length != str2.length) return false;
  let freqMap = {};
  for (let char of str1) freqMap[char] = (freqMap[char] || 0) + 1;
  for (let char of str2) {
    if (!freqMap[char]) return false;
    freqMap[char]--;
  }
  return true;
}
console.log(anagram("Hello", "elloH"));

// 5. Count the number of words in a sentence.
function countWords(str) {
  let count = 0;
  let inWord = false;
  for (let char of str) {
    if (char !== " ") {
      if (!inWord) count++;
      inWord = true;
    } else inWord = false;
  }
  return count;
}
console.log(countWords("Hii this is vasanth"));

// 6. Find the first non-repeating character in a string
function firstNonRepeatingChar(str) {
  let freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (let char of str) {
    if (freq[char] == 1) {
      return char;
    }
  }
  return null;
}
console.log(firstNonRepeatingChar("character"));

// 7. Remove all vowels from a string.
function removeVowels(str) {
  let vowels = "aeiouAEIOU";
  let result = "";
  for (let char of str) {
    if (!vowels.includes(char)) {
      result += char;
    }
  }
  return result;
}
console.log(removeVowels("vasanthaeiou"));

// 8. Find the shortest word in a sentence.
function findShortestWord(str) {
  let short = "";
  let currWord = "";
  let minLength = Infinity;
  for (let i = 0; i <= str.length; i++) {
    if (i == str.length || str[i] == " ") {
      if (currWord.length > 0 && currWord.length < minLength) {
        short = currWord;
        minLength = currWord.length;
      }
      currWord = "";
    } else {
      currWord += str[i];
    }
  }
  return short || null;
}
console.log(findShortestWord("find the shortest word"));

// 9. Count occurrences of a substring within a string.
function countOccurrence(str, subStr) {
  let count = 0;
  let index = 0;
  while ((index = str.indexOf(subStr, index)) !== -1) {
    count++;
    index++;
  }
  return count;
}
console.log(countOccurrence("apple pie apple pie", "apple"));
