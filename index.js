const bgColorInput = document.getElementById('background-color');
const borderColorInput = document.getElementById('border-color');
const bgEnable = document.getElementById('background');
const borderEnable = document.getElementById('border');

let backgroundColor = '#3aa757';
let borderColor = '#21B098';
let hasBorder = true;
let hasBackground = false;

bgColorInput.addEventListener('change', (e) => {
  backgroundColor = e.target.value;
});

borderColorInput.addEventListener('change', (e) => {
  borderColor = e.target.value;
});

bgEnable.addEventListener('change', (e) => {
  hasBackground = e.target.checked;
});

borderEnable.addEventListener('change', (e) => {
  hasBorder = e.target.checked;
});

const addBtn = document.getElementById('add');
addBtn.addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const message = {
    enable: true,
    rule: `* {
      ${hasBorder ? `outline: 1px solid ${borderColor} !important;` : ''}
      ${hasBackground ? `background: ${backgroundColor + '08'} !important;` : ''}
    }`
  };
  chrome.tabs.sendMessage(tab.id, message);
});

const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const message = { enable: false };
  chrome.tabs.sendMessage(tab.id, message);
});
