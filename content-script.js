chrome.runtime.onMessage.addListener((message, _sender, _sendResponse) => {
  const { enable, rule } = message;

  // remove the style if it already exists
  const style = document.getElementById('visualizerEnabled');
  style?.parentNode.removeChild(style);
  
  if (enable) {
    const newStyle = document.createElement('style');
    newStyle.setAttribute('id', 'visualizerEnabled');
    newStyle.innerHTML = rule;
    document.head.appendChild(newStyle);
  }
});
