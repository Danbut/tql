import evaluate from "tql/evaluate";
import findAllDocsContainingAtLeastOneTagIdFromTagsIdsArr from "tql/findAllDocsContainingAtLeastOneTagIdFromTagsIdsArr";
import findAllTagsByTagsNames from "tql/findAllTagsByTagsNames";
import getLeafNodes from "tql/getTagsNames";
import { AST } from "tql/parse/types/AST";

const solve = async (ast: AST) => {
    const tagsNames = getLeafNodes(ast);
    
    
    const tags = await findAllTagsByTagsNames(tagsNames);
    
    const docs = await findAllDocsContainingAtLeastOneTagIdFromTagsIdsArr(tags.map(t => t._id));
    
    return evaluate(ast, docs, tags)
}

export default solve;
