//? Day 3: Strings & String Manipulation
//* Session Focus: Basic string operations, string traversal, and manipulation techniques.

// 1. Count vowels and consonants in a string.





function upperCase(str){
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz"
    const arr = [];
    for (let ind = 0; ind < str.length; ind++){
        let currind = lower.indexOf(str[ind])
        if(currind != -1){
            arr.push(upper[currind])
        } else {
            arr.push(str[ind])
        }
    }
    return arr.join("");
        
    }
console.log(upperCase("vasanth"));

function toUpperCase(str){
    const arr =[];
    for (let ind = 0; ind < str.length; ind++){
        if(str[ind] >= 'a' && str[ind] <= 'z'){
            arr.push(String.fromCharCode(str.charCodeAt(ind) - 32))
        } else {
            arr.push(str[ind])
        }
    }
    return arr.join("")
}
console.log(toUpperCase("vasanth"));

function lowerCase(str){
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz"
    const arr = [];
    for (let ind = 0; ind < str.length; ind++){
        let currind = upper.indexOf(str[ind])
        if(currind != -1){
            arr.push(lower[currind])
        } else {
            arr.push(str[ind])
        }
    }
    return arr.join("");
        
    }
console.log(lowerCase("VASANTH"));

function toLowerCase(str){
    const arr =[];
    for (let ind = 0; ind < str.length; ind++){
        if(str[ind] >= 'A' && str[ind] <= 'Z'){
            arr.push(String.fromCharCode(str.charCodeAt(ind) + 32))
        } else {
            arr.push(str[ind])
        }
    }
    return arr.join("")
}
console.log(toLowerCase("VASANTH"));

