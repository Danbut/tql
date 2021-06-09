import operators from "../operators";
import { AST } from "../types/AST";
import TokenType from "../types/TokenType";

const makeAst = (rpn: string[]) => {
    const stack: AST[] = [];
    rpn.forEach((token: string | TokenType) => {
        if (token in operators) {
            let operator = operators[token as TokenType];
             //@ts-ignore
            let numArgs = operator.n || 2;
            let args = [];
            for (let i = 1; i <= numArgs; i++) {
            args.push(stack.pop());
            }
            //@ts-ignore
            stack.push(operator.func.apply(null, args.reverse()));
        }
    else {
        stack.push(token);
    }
    });
    if (stack.length != 1) {
    console.error('Invalid rpn ', rpn);
    }
    else {
    return stack[0];
    }
}

export default makeAst;