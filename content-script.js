chrome.runtime.onMessage.addListener((message, _sender, _sendResponse) => {
  const { enable, rule } = message;

  if (enable) {
    // remove the style if it already exists
    const style = document.getElementById('visualizerEnabled');
    style?.parentNode.removeChild(style);
    // create a new style element
    const newStyle = document.createElement('style');
    newStyle.setAttribute('id', 'visualizerEnabled');
    newStyle.innerHTML = rule;
    document.head.appendChild(newStyle);
  } else {
    const style = document.getElementById('visualizerEnabled');
    style?.parentNode.removeChild(style);
  }
});
