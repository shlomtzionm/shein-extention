import "./index.css"

function IndexPopup() {
  async function display() {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

    const text = await chrome.tabs.sendMessage(tab.id!, {
      action: "getText"
    })

    alert(text)
  }

  return (
    <div style={{ padding: "1rem" }}>
      <button onClick={display}>Get Page Text</button>
    </div>
  )
}

export default IndexPopup
