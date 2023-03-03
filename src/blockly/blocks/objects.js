/**
 * @fileoverview Blockly block definitions of Json objects.
 * @author preetvadaliya@gmail.com (Preet Vadaliya)
 */

import * as Blockly from 'blockly';

import { OBJECT_BLOCK_COLOR } from '../block_colors';

Blockly.Blocks['json_object_type_return'] = {
  init: function () {
    this.appendDummyInput().appendField('Object');
    this.appendStatementInput('J_OBJ').setCheck(null);
    this.setOutput(true, null);
    this.setColour(OBJECT_BLOCK_COLOR);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['json_object_type_no_return'] = {
  init: function () {
    this.appendDummyInput().appendField('Object');
    this.appendStatementInput('J_OBJ').setCheck(null);
    this.setColour(OBJECT_BLOCK_COLOR);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
