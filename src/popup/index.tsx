import "./index.css"

function IndexPopup() {
  async function display() {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

  chrome.runtime.sendMessage({action:"getProductData"},(response)=>{
    if (response.success){
      console.log("Product data from api:", response.data);
      
    } else{
      console.log( "Api error", response.error);
      
    }
  })
}



  return (
    <div style={{ padding: "1rem" }}>
      <button onClick={display}>turn on</button>
      
    </div>
  )
}

export default IndexPopup
