/**
 * @fileoverview Main workspace injection.
 * @author preetvadaliya@gmail.com (Preet Vadaliya)
 */

import * as Blockly from 'blockly';

import { downloadFile } from './helpers';
import { generateBlocksFromAst } from './parsers/parser';
import parse from 'json-to-ast';

const workspaceArea = document.getElementById('workspace-area');
const workspaceDiv = document.getElementById('workspace');

// workspace injection
const workspace = Blockly.inject(workspaceDiv, {
  collapse: true,
  comments: true,
  css: true,
  disable: true,
  grid: {
    spacing: 25,
    length: 1,
    colour: '#212121',
    snap: true,
  },
  horizontalLayout: false,
  maxBlocks: Infinity,
  theme: {
    fontStyle: {
      family: 'Varela Round, sans-serif',
      weight: '400',
      size: 12,
    },
  },
  move: {
    scrollbars: {
      horizontal: true,
      vertical: true,
    },
    drag: true,
    wheel: false,
  },
  readOnly: false,
  renderer: 'geras',
  rtl: false,
  sounds: true,
  trashcan: true,
  toolbox: {
    kind: 'flyoutToolbox',
    contents: [
      { kind: 'block', type: 'json_object_type_no_return' },
      { kind: 'block', type: 'json_number' },
      { kind: 'block', type: 'json_boolean' },
      { kind: 'block', type: 'json_text' },
      { kind: 'block', type: 'json_null' },
      { kind: 'block', type: 'json_pair' },
      { kind: 'block', type: 'json_array' },
      { kind: 'block', type: 'json_object_type_return' },
    ],
  },
  zoom: {
    controls: true,
    wheel: true,
    startScale: 1,
    maxScale: 3,
    minScale: 1,
    scaleSpeed: 1.1,
    pinch: true,
  },
});

// add workspace change listeners.
workspace.addChangeListener(Blockly.Events.disableOrphans);
workspace.addChangeListener(function () {
  const code = Blockly.Json.workspaceToCode(workspace);
  editor.setValue(code, -1);
});

// window resize listener.
window.addEventListener('resize', onWorkspaceResize, false);
onWorkspaceResize();

function onWorkspaceResize() {
  let element = workspaceArea;
  let x = 0;
  let y = 0;
  do {
    x += element.offsetLeft;
    y += element.offsetTop;
    element = element.offsetParent;
  } while (element);
  workspaceDiv.style.left = x + 'px';
  workspaceDiv.style.top = y + 'px';
  workspaceDiv.style.width = workspaceArea.offsetWidth + 'px';
  workspaceDiv.style.height = workspaceArea.offsetHeight + 'px';
  Blockly.svgResize(workspace);
}

const codeDownloadBtn = document.getElementById('code-download');
const blockDownloadBtn = document.getElementById('block-download');

codeDownloadBtn.addEventListener('click', function () {
  downloadFile('code.json', Blockly.Json.workspaceToCode(workspace));
});

blockDownloadBtn.addEventListener('click', function () {
  downloadFile(
    'blocks.json',
    JSON.stringify(Blockly.serialization.workspaces.save(workspace))
  );
});

document.getElementById('code-to-block').addEventListener('click', function () {
  const code = editor.getSession().getValue().toString();
  const node = parse(JSON.stringify(JSON.parse(code)));
  workspace.clear();
  generateBlocksFromAst(node, workspace);
  workspace.scrollCenter();
});
