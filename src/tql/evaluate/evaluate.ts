import and from "tql/and";
import not from "tql/not";
import or from "tql/or";
import { AST } from "tql/parse/types/AST";
import tag from "tql/tag";


const evaluate = (ast: AST, docs, tags) => {
    const operator = Array.isArray(ast) ? ast[0] : ast

    

    switch (operator) {
        case 'and':{
            const left = evaluate(ast[1], docs, tags);
            const right = evaluate(ast[2], docs, tags);
            return and(left, right);}
        case 'or':{
            const left = evaluate(ast[1], docs, tags);
            const right = evaluate(ast[2], docs, tags);
            return or(left, right);}
        case 'not':{
            const operand = evaluate(ast[1], docs, tags);
            return not(operand, docs)}
        default:{
            return tag(ast, docs, tags)}
    } 
}

export default evaluate;
