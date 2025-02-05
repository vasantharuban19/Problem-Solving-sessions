function selectionSort(arr =[]){
    console.log(arr);
    for(let ind = 0; ind < arr.length; ind++){
        let minInd = ind;
        for(let ind1 = ind + 1; ind1 < arr.length; ind1++){
            if (arr[minInd] < arr[ind1]){
                minInd = ind1;
            }
        }
        if(minInd != ind){
            let temp = arr[ind];
            arr[ind] = arr[minInd];
            arr[minInd] = temp;
        }
    }
    console.log(arr);
    
}

selectionSort(Array.from({length: 10}, () => Math.floor(Math.random() * 100)))

function sortByLength(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j].length > arr[j + 1].length) {
                // Swap elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(sortByLength(["kiwi", "strawberry", "grape", "orange"]));