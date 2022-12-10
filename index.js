const addBtn = document.getElementById('add');
let backgroundColor = '#3aa757'
const bgColorInput = document.getElementById('background-color');
const bgEnable = document.getElementById('background');
const borderEnable = document.getElementById('border');
let borderColor = '#21B098'
const borderColorInput = document.getElementById('border-color');
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

addBtn.addEventListener('click', async () => {
  chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
    const message = { 
      enable: true,
      rule: `* {
        ${hasBorder ? `outline: 1px solid ${borderColor} !important;` : ''}
        ${hasBackground ? `background: ${backgroundColor + '10'} !important;` : ''}
      }`
    };
    chrome.tabs.sendMessage(tab.id, message);
  });

  // async/await 写法
  // let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // let message = { start: true };
  // chrome.tabs.sendMessage(tab.id, message, (res) => {
  //   srcList = Array.from(new Set(res));
  //   const imgList = srcList.map((src) => `<img src="${src}" />`).join('');

  //   document.getElementById('app').innerHTML = imgList;
  // });
});

const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', async () => {
  chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
    const message = { enable: false };
    chrome.tabs.sendMessage(tab.id, message);
  });

  // async/await写法
  // let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // if (!srcList) {
  //   document.getElementById('app').innerHTML = '未获取图片';
  //   return;
  // }
});
