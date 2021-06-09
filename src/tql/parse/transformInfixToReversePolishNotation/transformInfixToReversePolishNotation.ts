import operators from "../operators";
import TokenType from "../types/TokenType";

const transformInfixToReversePolishNotation = (exp: string[]) => {
    const stack: string[] = [];
    const rpn: string[] = [];
    let invalid = false;
    exp.forEach((token: string | TokenType) => {
    if (token in operators) {
        while (
            stack[stack.length-1] &&
            operators[stack[stack.length-1] as TokenType] &&
            operators[token as TokenType].precedence <= operators[stack[stack.length-1] as TokenType].precedence) {
        rpn.push(stack.pop()!!);
        }
        stack.push(token);
    } else if (token == '(') {
        stack.push(token);
    } else if (token == ')') {
        while (stack.length && stack[stack.length-1] != '(') {
        rpn.push(stack.pop()!!);
        }
        if (stack[stack.length-1] == '(') {
        stack.pop();
        }
        else {
        invalid = true;
        }
    } else {
        rpn.push(token);
        }
    });

    if (stack.indexOf('(') > -1 || stack.indexOf(')') > -1) {
        invalid = true;
    }

    if (invalid) {
        console.error('Invalid expression ', exp);
    }
    
    return rpn.concat(stack.reverse());
}

export default transformInfixToReversePolishNotation;