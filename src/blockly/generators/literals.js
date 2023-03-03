/**
 * @fileoverview Blockly block code generators of Json literals.
 * @author preetvadaliya@gmail.com (Preet Vadaliya)
 */

import * as Blockly from 'blockly';

import { getValidString } from '../helpers';

Blockly.Json['json_text'] = function (block) {
  const text = block.getFieldValue('TF');
  const code = `"${getValidString(text)}"`;
  return [code, Blockly.Json.ORDER_ATOMIC];
};

Blockly.Json['json_number'] = function (block) {
  const number = block.getFieldValue('NF');
  const code = `${number}`;
  return [code, Blockly.Json.ORDER_ATOMIC];
};

Blockly.Json['json_boolean'] = function (block) {
  const boolean = block.getFieldValue('BF');
  const code = `${boolean}`;
  return [code, Blockly.Json.ORDER_ATOMIC];
};

Blockly.Json['json_null'] = function (block) {
  const code = 'null';
  return [code, Blockly.Json.ORDER_ATOMIC];
};
