export function getObjectBlock(workspace, type) {
  const block = workspace.newBlock(type);
  block.initSvg();
  block.render();
  return block;
}
