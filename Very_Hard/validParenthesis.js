/*
Write a validator for strings containing three types of parentheses: (, [, and {. 
Return true if the string is regular (i.e., all open parentheses are closed in the right order).

Examples

regularParenthesis("{[()]}") ➞ true

regularParenthesis("{[(])}") ➞ false

regularParenthesis("()[]{}") ➞ true

regularParenthesis("([)]") ➞ false

regularParenthesis("") ➞ true
*/

function validParenthesis(str) {
    let stack = [];
    let pairs = {
        ")": "(",
        "]": "[",
        "}": "{"
    };

    for (const s of str) {
        if (["(", "[", "{"].includes(s)) {
            stack.push(s);
        } else if ([")", "]", "}"].includes(s)) {
            if (stack.pop() !== pairs[s]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

exports.solution = validParenthesis; 
