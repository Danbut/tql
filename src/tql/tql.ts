import parse from "./parse";
import solve from "./solve";

const tql = (literals: string, ...tags: string[]) => { 
  if (literals) {
    return solve(parse(literals[0]));
  }
}

export default tql;
