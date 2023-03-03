/**
 * @fileoverview Blockly block code generators of Json objects.
 * @author preetvadaliya@gmail.com (Preet Vadaliya)
 */

import * as Blockly from 'blockly';

Blockly.Json['json_object_type_return'] = function (block) {
  const obj = Blockly.Json.statementToCode(block, 'J_OBJ');
  const code = `{\n${obj}\n}`;
  return [code, Blockly.Json.ORDER_ATOMIC];
};

Blockly.Json['json_object_type_no_return'] = function (block) {
  const obj = Blockly.Json.statementToCode(block, 'J_OBJ');
  const code = `{\n${obj}\n}`;
  return code;
};
