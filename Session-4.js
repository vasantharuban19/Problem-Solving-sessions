function maxminElement(arr =[]) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return {max,min};
}

console.log(maxminElement([10, 20, 30, 40, 50]));

function sumElement(arr){
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}

console.log(sumElement([1, 2, 3, 4, 5]));

function findPeakElement(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] < arr[mid + 1]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left; 
}

console.log(findPeakElement([1, 3, 5, 7, 6, 4, 2]));
