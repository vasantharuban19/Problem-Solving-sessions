// Day-4: Arrays & Array Manipulations
// Session Focus: Array creation, traversal, and manipulation techniques.

// 1. Find the maximum and minimum elements in an array.
function maxminElement(arr = []) {
  console.log(arr);

  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return [max, min];
}
// console.log(maxminElement([10, 20, 30, 40, 50]));
console.log(
  maxminElement(
    Array.from({ length: 5 }, () => Math.floor(Math.random() * 100))
  )
);

// 2. Find the second - largest element in an array.
function secLargest(arr = []) {
  console.log(arr);
  if (arr.length < 2) return null;
  let max = arr[0];
  let secMax = -Infinity;
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      secMax = max;
      max = arr[i];
    } else if (arr[i] < max && arr[i] > secMax) {
      secMax = arr[i];
    }
  }
  return { max, secMax };
}
// console.log(secLargest([10,20,5,15,20]));
console.log(
  secLargest(Array.from({ length: 10 }, () => Math.floor(Math.random() * 100)))
);

// 3. Sort an array of integers.
// Selection Sort
function sort(arr = []) {
  // console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    let minInd = i;
    for (let ind = i + 1; ind < arr.length; ind++) {
      if (arr[minInd] > arr[ind]) minInd = ind;
    }
    if (i !== minInd) {
      [arr[i], arr[minInd]] = [arr[minInd], arr[i]];
    }
  }
  return arr;
}
console.log(
  sort(Array.from({ length: 10 }, () => Math.floor(Math.random() * 100)))
);

// 4.Rotate an array by one position.
function rotateOne(arr = []) {
  console.log(arr);
  let n = arr.length;
  let temp = arr[n - 1];
  for (let i = n - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = temp;
  return arr;
}
// console.log(rotateOne(sort([1, 2, 3, 4, 5])));
console.log(
  rotateOne(
    sort(Array.from({ length: 5 }, () => Math.floor(Math.random() * 10)))
  )
);

// 5. Remove duplicates from a sorted array.
function removeDuplicates(arr = []) {
  let unique = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] != arr[i]) {
      unique.push(arr[i]);
    }
  }
  // console.log(unique.length);
  return unique;
}
console.log(removeDuplicates(sort([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])));

// 6. Calculate the sum of elements in an array
function sum(arr = []) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
console.log(sum([1, 2, 3, 4, 5]));

function rightSidedSum(arr = []) {
  let total = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    total += arr[i];
    arr[i] = total - arr[i];
  }
  return arr;
}
console.log(rightSidedSum([1, 2, 3, 4]));

// 7. Find the number of occurrences of an element in an array.
function findOcc(arr = [], elem = 2) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == elem) {
      count++;
    }
  }
  return count;
}
console.log(findOcc([1, 2, 3, 2, 4, 2, 5, 2]));

// Session Practice question

// 1. Merge two sorted arrays
function mergeSortedArray(arr1, arr2) {
  let i = 0;
  let j = 0;
  let merged = [];
  console.log(arr1, arr2);
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }
  return merged;
}
console.log(
  mergeSortedArray(
    sort(Array.from({ length: 5 }, () => Math.floor(Math.random() * 10))),
    sort(Array.from({ length: 5 }, () => Math.floor(Math.random() * 10)))
  )
);

// 2. Reverse the elements in an array.
function reverseArray(arr = []) {
  let left = 0;
  let right = arr.length - 1;
  console.log(arr);
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}
console.log(
  reverseArray(
    sort(Array.from({ length: 5 }, () => Math.floor(Math.random() * 10)))
  )
);

// 3. Rotate an array to the left by K positions.
function rotateLeft(arr = [], k) {
  let n = arr.length;
  let left = 0;
  let right = k - 1;
  k = k % n;
  if (n == 0) return arr;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  left = k;
  right = n - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  left = 0;
  right = n - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}
console.log(rotateLeft([1, 2, 3, 4, 5], 2));

// 4. Search for an element in a sorted array.
function binarySearch(arr = [], target = 23) {
  let left = 0;
  let right = arr.length - 1;
  console.log(arr);
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
console.log(
  binarySearch(
    sort(Array.from({ length: 100 }, () => Math.floor(Math.random() * 100)))
  )
);

// 5. Find the cumulative sum of an array.
function cumulativeSum(arr = []) {
  let result = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    result.push(sum);
  }
  return result;
}
console.log(cumulativeSum([1, 2, 3, 4, 5]));

// 6. Calculate the product of all elements in an array.
function calculateProduct(arr = []) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}
console.log(calculateProduct([1, 2, 3, 4, 5]));

// 7. Check if an array is a palindrome.
function isPalindrome(arr = []) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
console.log(isPalindrome([1, 2, 3, 2, 1]));

// 8. Find the intersection of two arrays. *important
function intersection(arr1, arr2) {
  const map = new Map();
  const result = [];

  for (let num of arr1) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (let num of arr2) {
    if (map.get(num) > 0) {
      result.push(num);
      map.set(num, map.get(num) - 1);
    }
  }
  return result;
}
const arr1 = Array.from({ length: 5 }, () =>
  Math.floor(Math.random() * 10)
).sort((a, b) => a - b);
console.log(arr1);

const arr2 = Array.from({ length: 5 }, () =>
  Math.floor(Math.random() * 10)
).sort((a, b) => a - b);
console.log(arr2);

console.log(intersection(arr1,arr2));
      