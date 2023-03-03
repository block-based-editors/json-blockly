export function getMemberBlock(workspace, key) {
  const block = workspace.newBlock('json_pair');
  block.setFieldValue(key, 'KN');
  block.initSvg();
  block.render();
  return block;
}
