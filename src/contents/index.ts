import styles from "./index.module.css";
import axios from "axios"

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.action === "getProductData") {
    const products = Array.from(document.querySelectorAll("section.product-card")) as HTMLElement[];

    products.forEach(el => {
      el.style.position = "relative";

      const newDiv = document.createElement("div");
      newDiv.textContent = "Hello from extension";
      newDiv.className = styles.extensionVerify;  

      el.appendChild(newDiv);
    });
const data = await isProductReview()
console.log(data);

sendResponse(products.map(el => el.outerHTML));
  }
  return true;
});

async function isProductReview(){
  try {
    const url = "https://www.searchapi.io/api/v1/search";
const params = {
  "engine": "shein_product",
  "product_id":"59968751",
  "api_key":"yQoUGsxVdgSiZzQKuexkTaQP"
};

const response = await axios.get(url,{params})
  console.log(response.data);
  return response.data
  } catch (error:any) {
console.log(error);
    
  }
}