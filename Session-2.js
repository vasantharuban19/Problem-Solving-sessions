//  Day-2 Maths & Pattern Creation
//  Session practice questions:-

// 1. Calculate the factorial of a number.
function factorial(n) {
  let ans = 1;
  for (let i = n; i > 0; i--) {
    ans = ans * i;
  }
  return ans;
}
// console.log(factorial(5));

// 2. Genarate the Fibonacci sequence up to N terms.
function genarateFibonacci(n) {
  let arr = [];
  if (n > 0) arr.push(0);
  if (n > 1) arr.push(1);
  if (n > 2) {
    for (let i = 2; i < n; i++) {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
  }
  return arr;
}
// console.log(genarateFibonacci(7));

// 3. Check if a number is prime
function isPrime(n) {
  let count = 0;
  if (n == 2) return true;
  if (n % 2 == 0) return false;
  for (let i = 3; i * i <= n; i = i + 2) {
    count++;
    if (n % i == 0) {
      return [count, false];
    }
  }
  return [count, true];
}
// console.log(isPrime(13));

// 4. Sum of Digits in a number.
function sumOfDigits(n) {
  let sum = 0;
  if (n < 0) n = -n;
  while (n > 0) {
    sum = sum + (n % 10);
    n = Math.floor(n / 10);
  }
  return sum;
}
// console.log(sumOfDigits(1234));

// 5. Check if a number is a Palindrome.
function isPalindrome(n) {
  let rev = 0;
  let temp = 0;
  while (n > 0) {
    rev = rev * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return rev == temp;
}
// console.log(isPalindrome(10));

// 6.  Print a right-angled triangle pattern of asterisks.
function rightAngleTriangle(n) {
  for (let row = 0; row < n; row++) {
    let arr = [];
    for (let col = 0; col <= row; col++) {
      arr.push("*");
    }
    console.log(arr.join(""));
  }
}

// 7. Print a hollow square pattern.
function hollowSquare(n) {
  for (let row = 0; row < n; row++) {
    let arr = [];
    for (let col = 0; col < n; col++) {
      if (row == 0 || row == n - 1 || col == 0 || col == n - 1) arr.push("*");
      else arr.push(" ");
    }
    console.log(arr.join(""));
  }
}

// Post-Session Practice Questions:
//  1.Find the LCM of two numbers.
function findGCD(a, b) {
  // GCD (Greatest Common Divisor)
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
function findLcm(a, b) {
  // LCM (Least Common Multiple)
  return (a * b) / findGCD(a, b);
}
// console.log(findLcm(4, 5));

//  2.Generate a pyramid pattern of numbers.
// my approch ==>
function pyramidPattern(n) {
  for (let row = 1; row <= n; row++) {
    let str = "";
    let count = 1;
    for (let col = 1; col <= 2 * n; col++) {
      if (row + col >= n + 1 && row >= col - n + 1) {
        str += count.toString() + " ";
        count++;
      } else {
        str += "  ";
      }
    }
    console.log(str);
  }
}
// pyramidPattern(5);
//chatgpt approch
function pyramidPatterns(n) {
  for (let row = 1; row <= n; row++) {
    let str = " ".repeat(n - row); // Leading spaces for centering numbers
    let count = 1;

    // For each row, add numbers from 1 up to row
    for (let col = 1; col <= 2 * row - 1; col++) {
      str += count + " "; // Add the number with space
      count++;
    }

    console.log(str.trim()); // Remove the extra space at the end
  }
}
// pyramidPatterns(5);

//  3.Calculate the GCD of two numbers.
function calculateGCD(a, b) {
  // GCD (Greatest Common Divisor)
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
// console.log(calculateGCD(10, 5));

//  4.Print an inverted triangle pattern of stars.
function inveretedTriangle(n) {
  for (let row = n; row > 0; row--) {
    let arr = [];
    for (let col = 0; col < row; col++) {
      arr.push("*");
    }
    console.log(arr.join(""));
  }
}
// inveretedTriangle(5);

//  5.Check if two numbers are coprime.
function coprime(a, b) {
  // GCD (Greatest Common Divisor)
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a == 1;
}
// console.log(coprime(8, 15));

//  6.Print a diamond pattern of stars.
function printDiamand(n) {
  for (let row = 1; row <= n; row++) {
    let arr = [];
    for (let space = 0; space < n - row; space++) {
      arr.push(" ");
    }
    for (let star = 0; star < 2 * row - 1; star++) {
      arr.push("*");
    }
    console.log(arr.join(""));
  }
  for (let row = n - 1; row >= 1; row--) {
    let arr = [];
    for (let space = 0; space < n - row; space++) {
      arr.push(" ");
    }
    for (let star = 0; star < 2 * row - 1; star++) {
      arr.push("*");
    }
    console.log(arr.join(""));
  }
}
// printDiamand(5)

//  7.Print Pascal’s triangle up to N rows.
function pascalsTriangle(n) {
  let triangle = [];
  for (let row = 0; row < n; row++) {
    let arr = [];
    for (let col = 0; col <= row; col++) {
      if (col == 0 || col == row) {
        arr.push(1);
      } else {
        arr.push(triangle[row - 1][col - 1] + triangle[row - 1][col]);
      }
    }
    triangle.push(arr);
  }
  for (let i = 0; i < n; i++) {
    let space = " ".repeat(n - i - 1);
    console.log(space + triangle[i].join(" "));
  }
}
// pascalsTriangle(5)

//  8.Find all divisors of a number.
function findDivisors(n){
  let div = [];
  for(let i = 0; i * i <= n; i++){
    if(n % i == 0){
      div.push(i);
      if(i !== n / i){
        div.push(n /i);
      }
    }
  }
  div.sort((a,b) => a-b)
  console.log(div.join(' ')); 
}
// findDivisors(12)

//  9.Print a checkerboard pattern.
function checkerBoard(n){
  for(let row = 0; row < n; row++){
    let line = [];
    for(let col = 0; col < n; col++){
      if((row + col) % 2 == 0){
        line.push('* ')
      }
      else{
        line.push('  ');
      }
    }
    console.log(line.join(''));
  }
}
checkerBoard(5)

module.exports = {
  rightAngleTriangle,
  isPalindrome,
  factorial,
  genarateFibonacci,
  isPrime,
  hollowSquare,
  pyramidPattern,
  pyramidPatterns,
};
