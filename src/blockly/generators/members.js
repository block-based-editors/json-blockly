/**
 * @fileoverview Blockly block code generators of Json members.
 * @author preetvadaliya@gmail.com (Preet Vadaliya)
 */

import * as Blockly from 'blockly';

import { getValidJSONKey } from '../helpers';

Blockly.Json['json_pair'] = function (block) {
  const key = block.getFieldValue('KN');
  const value = Blockly.Json.valueToCode(
    block,
    'KV',
    Blockly.Json.ORDER_ATOMIC
  );
  const code = `"${getValidJSONKey(key)}" : ${value}`;
  return code;
};
