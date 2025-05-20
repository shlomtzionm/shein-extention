
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getText") {
    const text = document.body.innerText
    sendResponse(text)
  }
  // Return true to allow async `sendResponse`
  return true
})


