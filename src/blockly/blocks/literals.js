/**
 * @fileoverview Blockly block definitions of Json literals.
 * @author preetvadaliya@gmail.com (Preet Vadaliya)
 */

import * as Blockly from 'blockly';

import {
  BOOLEAN_BLOCK_COLOR,
  NULL_BLOCK_COLOR,
  NUMBER_BLOCK_COLOR,
  TEXT_BLOCK_COLOR,
} from '../block_colors';

import { getValidString } from '../helpers';

Blockly.Blocks['json_text'] = {
  init: function () {
    this.appendDummyInput().appendField(new Blockly.FieldTextInput('Json'), 'TF');
    this.setOutput(true, 'String');
    this.setColour(TEXT_BLOCK_COLOR);
    this.setTooltip('');
    this.setHelpUrl('');
    this.getField('TF').setValidator(this.validateText.bind(this));
  },
  validateText: function (value) {
    return getValidString(value);
  },
};

Blockly.Blocks['json_number'] = {
  init: function () {
    this.appendDummyInput().appendField(new Blockly.FieldNumber(0), 'NF');
    this.setOutput(true, 'Number');
    this.setColour(NUMBER_BLOCK_COLOR);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['json_boolean'] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldDropdown([
        ['true', 'true'],
        ['false', 'false'],
      ]),
      'BF'
    );
    this.setOutput(true, 'Boolean');
    this.setColour(BOOLEAN_BLOCK_COLOR);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['json_null'] = {
  init: function () {
    this.appendDummyInput().appendField('null');
    this.setOutput(true, null);
    this.setColour(NULL_BLOCK_COLOR);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
