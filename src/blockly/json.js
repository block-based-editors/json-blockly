/**
 * @fileoverview
 * @author
 */

import * as Blockly from 'blockly';

// Define new code generator for VBA
Blockly.Json = new Blockly.Generator('Json');

// Define operator order for VBA
Blockly.Json.ORDER_NONE = 99;
Blockly.Json.ORDER_ATOMIC = 0;

// Define scrub
Blockly.Json.scrub_ = function (block, code, opt_thisOnly) {
  const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  if (nextBlock && !opt_thisOnly) {
    return code + ',\n' + Blockly.Json.blockToCode(nextBlock);
  }
  return code;
};
