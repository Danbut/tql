import makeAst from 'tql/parse/makeAst';
import prepareToParse from 'tql/parse/prepareToParse';
import transformInfixToReversePolishNotation from './transformInfixToReversePolishNotation';

const parse = (parseString: string) => {
        return makeAst(transformInfixToReversePolishNotation(prepareToParse(parseString)));
}

export default parse;
