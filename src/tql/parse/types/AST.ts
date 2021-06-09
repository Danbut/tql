import { Tag } from "./Tag";
import TokenType from "./TokenType";

export type AST = [TokenType, AST | Tag, AST | Tag] | [TokenType, AST | Tag] | Tag;
