import {
  getBooleanLiteralBlock,
  getNullLiteralBlock,
  getNumberLiteralBlock,
  getTextLiteralBlock,
} from './literals';

import { Workspace } from 'blockly';
import { getArrayBlock } from './arrays';
import { getMemberBlock } from './members';
import { getObjectBlock } from './objects';
import parse from 'json-to-ast';

let firstCall = true;

/**
 * @param {parse.ValueNode} ast
 * @param {Workspace} workspace
 * @returns
 */
export function generateBlocksFromAst(ast, workspace) {
  if (ast.type === 'Literal') {
    if (typeof ast.value === 'boolean') {
      return getBooleanLiteralBlock(workspace, ast.value);
    }
    if (typeof ast.value === 'string') {
      return getTextLiteralBlock(workspace, ast.value);
    }
    if (typeof ast.value === 'number') {
      return getNumberLiteralBlock(workspace, ast.value);
    }
    if (ast.value === null) {
      return getNullLiteralBlock(workspace);
    }
  } else if (ast.type === 'Array') {
    const block = getArrayBlock(workspace, ast.children.length);
    ast.children.forEach((item, i) => {
      block
        .getInput('V' + i)
        .connection.connect(generateBlocksFromAst(item, workspace).outputConnection);
    });
    return block;
  } else if (ast.type === 'Object') {
    let block = null;
    if (firstCall) {
      block = getObjectBlock(workspace, 'json_object_type_no_return');
      firstCall = false;
    } else {
      block = getObjectBlock(workspace, 'json_object_type_return');
    }
    let connection = block.getInput('J_OBJ').connection;
    ast.children.forEach((item) => {
      const keyBlock = getMemberBlock(workspace, item.key.value);
      const valueBlock = generateBlocksFromAst(item.value, workspace);
      keyBlock.getInput('KV').connection.connect(valueBlock.outputConnection);
      connection.connect(keyBlock.previousConnection);
      connection = keyBlock.nextConnection;
    });
    firstCall = true;
    return block;
  }
}
