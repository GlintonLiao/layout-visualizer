chrome.runtime.onMessage.addListener((message, _sender, _sendResponse) => {
  const { enable, rule } = message;

  if (enable) {

    const style = document.getElementById('visualizerEnabled');
    if (style) style.parentNode.removeChild(style);

    const newStyle = document.createElement('style');
    newStyle.setAttribute('id', 'visualizerEnabled');
    newStyle.innerHTML = rule;
    document.head.appendChild(newStyle);
  } else {
    const style = document.getElementById('visualizerEnabled');
    if (!style) return;
    style.parentNode.removeChild(style);
  }
});
