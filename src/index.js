module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let sameBracketsStack = [];

    for (let i = 0; i < str.length; i++) {
        if (bracketsConfig.some(bracket => bracket[0] == str[i] && bracket[1] == str[i])) {
            if (sameBracketsStack.some(bracket => bracket == str[i])) {
                let properBrackets = bracketsConfig.find(bracket => bracket[1] == str[i]);
                let stackBracket = sameBracketsStack.pop();
                if (properBrackets[0] != stackBracket) {
                    return false;
                }
                stack.pop();
            } else {
                stack.push(str[i]);
                sameBracketsStack.push(str[i]);
            }
        } else if (bracketsConfig.some(bracket => bracket[0] == str[i])) {
            stack.push(str[i]);
        } else if (bracketsConfig.some(bracket => bracket[1] == str[i])) {
            let properBrackets = bracketsConfig.find(bracket => bracket[1] == str[i]);
            let stackBracket = stack.pop();
            if (properBrackets[0] != stackBracket) {
                return false;
            }
        }
    }

    return stack.length == 0 && sameBracketsStack.length == 0;
}

