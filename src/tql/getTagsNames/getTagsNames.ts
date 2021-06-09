const getLeafNodes = (ast) => {
    const traverse = (acc, node) => {
        if(Array.isArray(node))
        {
            node.slice(0, 1);
            return node.reduce(traverse, acc);
        }
        acc.push(node);
        return acc;
    }
    
    return traverse([], ast);
}

export default getLeafNodes;
