import { AST } from "../types/AST";
import assign from 'lodash/assign';

const operators = {
    not: {
        precedence: 5,
        func: (operand: string | AST): AST => {
            
            return ["not", operand]
        },
        n: 1
    },
    or: {
        precedence: 1,
        func: (firstOperand: string | AST, secondOperand: string | AST): AST => {
            
            return ["or", firstOperand, secondOperand]
        }
    },
    and: {
        precedence: 2,
        func: (firstOperand: string | AST, secondOperand: string | AST): AST => {
            
            return ["and", firstOperand, secondOperand]
        }
    },
};

// synonyms
assign(operators, {"&&": operators.and});
assign(operators, {"||": operators.or});
assign(operators, {"!": operators.not});

export default operators;
