export function getTextLiteralBlock(workspace, text) {
  const block = workspace.newBlock('json_text');
  block.setFieldValue(text, 'TF');
  block.initSvg();
  block.render();
  return block;
}

export function getNumberLiteralBlock(workspace, number) {
  const block = workspace.newBlock('json_number');
  block.setFieldValue(number, 'NF');
  block.initSvg();
  block.render();
  return block;
}

export function getBooleanLiteralBlock(workspace, boolean) {
  const block = workspace.newBlock('json_boolean');
  block.setFieldValue(boolean ? 'true' : 'false', 'BF');
  block.initSvg();
  block.render();
  return block;
}

export function getNullLiteralBlock(workspace) {
  const block = workspace.newBlock('json_null');
  block.initSvg();
  block.render();
  return block;
}
