export function getArrayBlock(workspace, size) {
  const block = workspace.newBlock('json_array');
  block.length_ = size;
  block.updateShape();
  block.initSvg();
  block.render();
  return block;
}
