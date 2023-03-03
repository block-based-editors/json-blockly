/**
 * @fileoverview custom actions for blocks.
 * @author preetvadaliya@gmail.com (Preet P. Vadaliya)
 */

import * as Blockly from 'blockly';

Blockly.ContextMenuRegistry.registry.register({
  displayText: 'Add Property',
  preconditionFn: function (scope) {
    if (scope.block.type.startsWith('json_object')) {
      return 'enabled';
    }
    return 'hidden';
  },
  callback: function (scope) {
    const block = scope.block;
    Blockly.Events.setGroup(true);
    const memberBlock = block.workspace.newBlock('json_pair');
    memberBlock.initSvg();
    memberBlock.render();
    const MTC = memberBlock.previousConnection;
    const MBC = memberBlock.nextConnection;
    if (block.getInput('J_OBJ').connection.targetConnection) {
      const TC = block.getInput('J_OBJ').connection.targetConnection;
      TC.disconnect();
      block.getInput('J_OBJ').connection.connect(MTC);
      MBC.connect(TC);
    } else {
      block.getInput('J_OBJ').connection.connect(MTC);
    }
    Blockly.Events.setGroup(false);
  },
  scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
  id: 'add-property-action',
  weight: 100,
});

Blockly.ContextMenuRegistry.registry.register({
  displayText: 'Set as Boolean',
  preconditionFn: function (scope) {
    if (scope.block.type === 'json_pair') {
      return 'enabled';
    }
    return 'hidden';
  },
  callback: function (scope) {
    const block = scope.block;
    Blockly.Events.setGroup(true);
    const newBlock = block.workspace.newBlock('json_boolean');
    newBlock.initSvg();
    newBlock.render();
    block.getInput('KV').connection.targetBlock()?.dispose(true);
    block.getInput('KV').connection.connect(newBlock.outputConnection);
    Blockly.Events.setGroup(false);
  },
  scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
  id: 'set-boolean-action',
  weight: -100,
});

Blockly.ContextMenuRegistry.registry.register({
  displayText: 'Set as Text',
  preconditionFn: function (scope) {
    if (scope.block.type === 'json_pair') {
      return 'enabled';
    }
    return 'hidden';
  },
  callback: function (scope) {
    const block = scope.block;
    Blockly.Events.setGroup(true);
    const newBlock = block.workspace.newBlock('json_text');
    newBlock.initSvg();
    newBlock.render();
    block.getInput('KV').connection.targetBlock()?.dispose(true);
    block.getInput('KV').connection.connect(newBlock.outputConnection);
    Blockly.Events.setGroup(false);
  },
  scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
  id: 'set-text-action',
  weight: -200,
});

Blockly.ContextMenuRegistry.registry.register({
  displayText: 'Set as Number',
  preconditionFn: function (scope) {
    if (scope.block.type === 'json_pair') {
      return 'enabled';
    }
    return 'hidden';
  },
  callback: function (scope) {
    const block = scope.block;
    Blockly.Events.setGroup(true);
    const newBlock = block.workspace.newBlock('json_number');
    newBlock.initSvg();
    newBlock.render();
    block.getInput('KV').connection.targetBlock()?.dispose(true);
    block.getInput('KV').connection.connect(newBlock.outputConnection);
    Blockly.Events.setGroup(false);
  },
  scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
  id: 'set-number-action',
  weight: -300,
});

Blockly.ContextMenuRegistry.registry.register({
  displayText: 'Set as Null',
  preconditionFn: function (scope) {
    if (scope.block.type === 'json_pair') {
      return 'enabled';
    }
    return 'hidden';
  },
  callback: function (scope) {
    const block = scope.block;
    Blockly.Events.setGroup(true);
    const newBlock = block.workspace.newBlock('json_null');
    newBlock.initSvg();
    newBlock.render();
    block.getInput('KV').connection.targetBlock()?.dispose(true);
    block.getInput('KV').connection.connect(newBlock.outputConnection);
    Blockly.Events.setGroup(false);
  },
  scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
  id: 'set-null-action',
  weight: -400,
});

Blockly.ContextMenuRegistry.registry.register({
  displayText: 'Set as Array',
  preconditionFn: function (scope) {
    if (scope.block.type === 'json_pair') {
      return 'enabled';
    }
    return 'hidden';
  },
  callback: function (scope) {
    const block = scope.block;
    Blockly.Events.setGroup(true);
    const newBlock = block.workspace.newBlock('json_array');
    newBlock.initSvg();
    newBlock.render();
    block.getInput('KV').connection.targetBlock()?.dispose(true);
    block.getInput('KV').connection.connect(newBlock.outputConnection);
    Blockly.Events.setGroup(false);
  },
  scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
  id: 'set-array-action',
  weight: -500,
});

Blockly.ContextMenuRegistry.registry.register({
  displayText: 'Set as Object',
  preconditionFn: function (scope) {
    if (scope.block.type === 'json_pair') {
      return 'enabled';
    }
    return 'hidden';
  },
  callback: function (scope) {
    const block = scope.block;
    Blockly.Events.setGroup(true);
    const newBlock = block.workspace.newBlock('json_object_type_return');
    newBlock.initSvg();
    newBlock.render();
    block.getInput('KV').connection.targetBlock()?.dispose(true);
    block.getInput('KV').connection.connect(newBlock.outputConnection);
    Blockly.Events.setGroup(false);
  },
  scopeType: Blockly.ContextMenuRegistry.ScopeType.BLOCK,
  id: 'set-obj-action',
  weight: -600,
});
