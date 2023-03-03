/**
 * @fileoverview Blockly block definitions of Json members.
 * @author preetvadaliya@gmail.com (Preet Vadaliya)
 */

import * as Blockly from 'blockly';

import { MEMBER_BLOCK_COLOR } from '../block_colors';
import { getValidJSONKey } from '../helpers';

Blockly.Blocks['json_pair'] = {
  init: function () {
    this.appendValueInput('KV')
      .setCheck(null)
      .appendField(new Blockly.FieldTextInput('key'), 'KN')
      .appendField(' :');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(MEMBER_BLOCK_COLOR);
    this.setTooltip('');
    this.setHelpUrl('');
    this.getField('KN').setValidator(this.validateKey.bind(this));
  },
  validateKey: function (value) {
    return getValidJSONKey(value);
  },
};
