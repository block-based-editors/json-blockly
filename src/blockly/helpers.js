/**
 * @fileoverview helpers and utilities functions.
 * @author preetvadaliya@gmail.com (Preet P. Vadaliya)
 */

export function getValidJSONKey(str) {
  str = str.trim();
  if (/^[0-9-]/.test(str)) {
    str = '_' + str;
  }
  str = str.replace(/[^a-zA-Z0-9_]/g, '_');
  return str;
}

export function getValidString(str) {
  str = str.replace(/'/g, "\\'");
  str = str.replace(/"/g, '\\"');
  return str;
}

export function downloadFile(filename, text) {
  var element = document.createElement('a');
  element.setAttribute(
    'href',
    'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
  );
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
