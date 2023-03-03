/**
 * @fileoverview Blockly block code generators of Json arrays.
 * @author preetvadaliya@gmail.com (Preet Vadaliya)
 */

import * as Blockly from 'blockly';

import { ARRAY_BLOCK_COLOR } from '../block_colors';

Blockly.Blocks['json_array'] = {
  init: function () {
    this.length_ = 0;
    this.setColour(ARRAY_BLOCK_COLOR);
    this.setOutput(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setMutator(new Blockly.Mutator(['json_array_mutation_item']));
    this.updateShape();
  },
  mutationToDom: function () {
    const element = document.createElement('mutation');
    element.setAttribute('items', this.length_);
    return element;
  },
  domToMutation: function (element) {
    this.length_ = parseInt(element.getAttribute('items'), 10);
    this.updateShape();
  },
  compose: function (topBlock) {
    let block = topBlock.nextConnection.targetBlock();
    this.length_ = 0;
    const values = [];
    while (block) {
      values.push(block.valueConnection_);
      block = block.nextConnection && block.nextConnection.targetBlock();
      this.length_++;
    }
    this.updateShape();
    for (let i = 0; i < this.length_; i++) {
      Blockly.Mutator.reconnect(values[i], this, 'V' + i);
    }
  },
  decompose: function (workspace) {
    const containerBlock = workspace.newBlock('json_array_mutation_container');
    containerBlock.initSvg();
    let connection = containerBlock.nextConnection;
    for (let i = 0; i < this.length_; i++) {
      const itemBlock = workspace.newBlock('json_array_mutation_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  saveConnections: function (containerBlock) {
    let block = containerBlock.nextConnection.targetBlock();
    let i = 0;
    while (block) {
      const value = this.getInput('V' + i);
      block.valueConnection_ = value && value.connection.targetConnection;
      i++;
      block = block.nextConnection && block.nextConnection.targetBlock();
    }
  },
  updateShape: function () {
    // remove all the inputs
    this.removeInput('AH', true);
    let i = 0;
    while (this.getInput('V' + i)) {
      this.removeInput('V' + i, true);
      i++;
    }
    // add inputs again
    if (this.length_ === 0) {
      this.appendDummyInput('AH')
        .appendField('empty array')
        .setAlign(Blockly.ALIGN_LEFT);
    } else {
      for (let i = 0; i < this.length_; i++) {
        if (i === 0) {
          this.appendValueInput('V' + i)
            .appendField('array with items')
            .setCheck(null)
            .setAlign(Blockly.ALIGN_LEFT);
        } else {
          this.appendValueInput('V' + i)
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT);
        }
      }
    }
  },
  saveExtraState: function () {
    return {
      length: this.length_,
    };
  },
  loadExtraState: function (state) {
    this.length_ = state['length'];
    this.updateShape();
  },
};

Blockly.Blocks['json_array_mutation_container'] = {
  init: function () {
    this.appendDummyInput().appendField('Array Items Stack');
    this.setNextStatement(true, null);
    this.setColour(ARRAY_BLOCK_COLOR);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['json_array_mutation_item'] = {
  init: function () {
    this.appendDummyInput().appendField('Item');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(ARRAY_BLOCK_COLOR);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
