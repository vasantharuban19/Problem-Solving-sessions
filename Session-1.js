// Day-1 Problem statements & Systematics Approcahes

// 1. Determine if a number is positive or negative.
// 1st method
function find(n) {
  return n > 0 ? "positive" : n < 0 ? "negative" : "zero";
}
console.log(find(15));
console.log(find(-12));
console.log(find(0));

// 2nd method
function find2(n) {
  if (n > 0) {
    return "positive";
  } else if (n < 0) {
    return "negative";
  } else {
    return "zero";
  }
}
console.log(find(12));
console.log(find(-10));
console.log(find(0));

// 2.Find the sum of two integers
function sum(a, b) {
  return a + b;
}
console.log(sum(4, 6));
// 2nd method Input type validation
function sum2(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Invalid input";
  }
  return a + b;
}
console.log(sum2(2, 0));

// 3. Identify the maximum and minimum of three numbers
// 1st method
function max(a, b) {
  return a < b ? b : a;
}
function min(a, b) {
  return a < b ? a : b;
}
function maxminmid(a, b, c) {
  const output = {};
  output.max = max(a, max(b, c));
  output.min = min(a, min(b, c));
  output.mid = a + b + c - output.max - output.min;
  return output;
}
console.log(max(5, 7));
console.log(min(5, 7));
console.log(maxminmid(5, 7, 10));
// 2nd method
function maxmidmin(a, b, c) {
  const output = {};
  if (a >= b && a >= c) {
    output.max = a;
  } else if (b >= a && b >= c) {
    output.max = b;
  } else {
    output.max = c;
  }
  if (a <= b && a <= c) {
    output.min = a;
  } else if (b <= a && b <= c) {
    output.min = b;
  } else {
    output.min = c;
  }
  output.mid = a + b + c - output.max - output.min;
  return output;
}
console.log(maxmidmin(10, 5, 3));

// 4. Count the number of digits in a number
function countDigits(n) {
  n = Math.abs(n);
  if (n == 0) return 1;
  let count = 0;
  while (n > 0) {
    n = parseInt(n / 10);
    count++;
  }
  return count;
}
console.log(countDigits(1234567890));

// 5. Check if a string contains only alphabets.
function string(s) {
  let alphabet = /^[A-Za-z]+$/.test(s);
  return alphabet;
}
console.log(string("VasantH"));
console.log(string("VASANTH24"));

// 6. Calculate the area of circle with a given radius.
function areaOfCircle(n) {
  return Math.PI * n * n;
}
console.log(areaOfCircle(5));

// Check if a character is a vowel.
function isVowel(char) {
  return "aeiouAEIOU".indexOf(char) != -1;
}
console.log(isVowel("a"));
console.log(isVowel("b"));

// Session Practice Questions:-
// 1. Calculate the difference between two integers
function diff(a, b) {
  return a - b;
}
console.log(diff(10, 5));

// 2. Check if a number is even or odd
// 1st method
function oddOrEven(n) {
  return n % 2 == 0 ? "even" : "odd";
}
console.log(oddOrEven(5));
// 2nd method
function oddeven(n) {
  if (n % 2 == 0) {
    return `${n} is even number`;
  } else {
    return `${n} is odd number`;
  }
}
console.log(oddeven(2));

// 3. Calculate the perimeter of a rectangle.
function calcPerimeterOfRectangle(l, w) {
  return 2 * (l + w);
}
console.log(calcPerimeterOfRectangle(4, 10));

// 4. Find the largest of four numbers
function findLargestNumber(num1, num2, num3, num4) {
  if (num1 >= num2 && num1 >= num3 && num1 >= num4) {
    return num1;
  } else if (num2 >= num1 && num2 >= num3 && num2 >= num4) {
    return num2;
  } else if (num3 >= num1 && num3 >= num2 && num3 >= num4) {
    return num3;
  } else {
    return num4;
  }
}
console.log(findLargestNumber(10, 20, 40, 30));

// 5. Calculate the average of three numbers
function calculateAverage(a, b, c) {
 return (a + b + c) / 3;
}
console.log(calculateAverage(-10,-20,-30));

// 6. Count the number of vowels in a string
// 1st method
function countVowels(str){
    const vowels = "aeiouAEIOU";
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
    return count;
}
console.log(countVowels("VasaNtH,aeiouAEIOU"));
// 2nd method
function countVowelsFp(str){
    const vowels = "aeiouAEIOU";
    return [...str].filter(char => vowels.includes(char)).length;
}
console.log(countVowels("VasaNtH,aeiouAE"));

// 7. Determine if a character is uppercase
// 1st method using toUpeerCase() and comparison
function upperCase(char){
  return char === char.toUpperCase()
}
console.log(upperCase("V"));
console.log(upperCase("v"));
// 2nd method using Regular Expression
function isUpperCase(char){
  return /^[A-Z]$/.test(char)
}
console.log(isUpperCase("H"));
console.log(isUpperCase("h"));

// 8. Print the reverse of a string
// 1st method using split(), reverse() and join()
function reverseString(str){
  return str.split('').reverse().join('')
}
console.log(reverseString("vasanth"));
// 2nd using for loop
function reversestring(str){
  let reverse = '';
  for(let i= str.length-1; i>=0; i--){
    reverse += str[i]
  }
  return reverse;
}
console.log(reversestring("vasanth"));



