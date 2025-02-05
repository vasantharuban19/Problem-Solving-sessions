function validParenthesis(expression = "") {
    const stack = [];
    const obj = {'}' : '{' , ')' : '(' , ']' : '['}

    for (let char of expression){
        if (char == '{' || char == '[' || char == '('){
            stack.push(char);
        } else {
            if(stack.length == 0 || stack.pop() != obj[char])
                return false;
        }
    }
    return stack.length == 0;
}

console.log(validParenthesis('[{([])}]'))
console.log(validParenthesis('[{(])}]'))