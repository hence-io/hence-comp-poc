import _values from 'lodash/object/values';
import _pick from 'lodash/object/pick';
import properties from './properties';

let generateDoc = (props, details)=> {
  let wrapper = document.createElement('div');
  let button = document.createElement('paper-button');
  let icon = document.createElement('iron-icon');
  let dialog = document.createElement('paper-dialog');
  let dialogDiv = document.createElement('div');
  let el = document.createElement('iron-doc-viewer');

  icon.setAttribute('icon', 'settings');
  button.appendChild(icon);
  button.style.position = 'absolute';
  button.style.top = '-7px';
  button.style.right = '-5px';
  button.style.borderRadius = '0 0 0 5px';
  button.style.zIndex = '2';
  button.style.background = 'rgba(0,0,0,0.4)';
  button.style.color = 'white';
  button.style.minWidth = '30px';
  button.style.paddingBottom = '5px';

  button.setAttribute('data-dialog', 'doc');
  button.onclick = (e) => {
    dialog.open();
  };

  dialog.id = 'doc';
  dialog.setAttribute('modal', 'true');
  //dialog.style.minWidth = '900px';
  dialog.style.maxWidth = '900px';
  //dialog.style.minHeight = '600px';
  dialog.style.maxHeight = '700px';
  //dialog.style.Height = '600px';
  dialog.style.overflow = 'scroll';

  let docProps = _values(_pick(properties, props));

  //console.log('docProps', docProps);

  el.descriptor = {
    "is": "hence-card",
    "properties": docProps,
    "desc": `
Example usage:
-------

${details}

Below are a selection of properties specific to this example of the card component.`
  };

  dialogDiv.style.position = 'relative';

  let dialogButtons = document.createElement('div');
  dialogButtons.className = 'buttons';
  //dialogButtons.style.position = 'fixed';
  //dialogButtons.style.height = '50px';
  //dialogButtons.style.bottom = '0';

  let dismiss = document.createElement('paper-button');
  dismiss.textContent = 'Close';
  dismiss.setAttribute('dialog-dismiss', 'true');
  dialogButtons.appendChild(dismiss);

  dialogDiv.appendChild(el);
  dialogDiv.appendChild(dialogButtons);

  dialog.appendChild(dialogDiv);

  wrapper.appendChild(button);
  wrapper.appendChild(dialog);

  return wrapper;
};

export default generateDoc;
