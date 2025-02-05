const {
  factorial,
  isPrime,
  isPalindrome,
  hollowSquare,
  rightAngleTriangle,
  pyramidPattern,
  pyramidPatterns,
  
} = require("./Session-2");
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic

  const str = userInput[0];

  console.log(pyramidPattern(str));

  //end-here
});
