/**
 * @fileoverview Blockly block code generators of Json arrays.
 * @author preetvadaliya@gmail.com (Preet Vadaliya)
 */

import * as Blockly from 'blockly';

Blockly.Json['json_array'] = function (block) {
  let codeArr = [];
  for (let i = 0; i < block.length_; i++) {
    const code = Blockly.Json.valueToCode(block, 'V' + i, Blockly.Json.ORDER_ATOMIC);
    if (code) {
      codeArr.push(code);
    }
  }
  const code = `[${codeArr.join(', ')}]`;
  return [code, Blockly.Json.ORDER_ATOMIC];
};
