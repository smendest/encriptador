import { STRINGS } from "./src/constants.js";
import { decrypt, encrypt } from "./src/utils.js";

// Const and variables
const pageTitleElement = document.getElementById('page-title');
const titleElement = document.getElementById('title');
const textAreaLabelElement = document.getElementById('text-area-label');
const textAreaElement = document.getElementById('text-area');
const outputParagraphLabelElement = document.getElementById('output-paragraph-label');
const outputParagraphElement = document.getElementById('output-paragraph');
const encryptButton = document.getElementById('encrypt-button');
const decryptButton = document.getElementById('decrypt-button');



// Assign values and listen events
function initialize() {
  // Assign titles and strings
  pageTitleElement.innerText = titleElement.innerText = STRINGS.TITLE;
  textAreaLabelElement.innerText = STRINGS.TEXT_AREA;
  textAreaElement.placeholder = STRINGS.TEXT_AREA_PLACEHOLDER;
  outputParagraphLabelElement.innerHTML = STRINGS.OUTPUT_LABEL;

  // Assign buttons labels
  encryptButton.innerHTML = STRINGS.ENCRYPT_BUTTON_LABEL;
  decryptButton.innerHTML = STRINGS.DECRYPT_BUTTON_LABEL;

  // Listen to button events
  encryptButton.addEventListener("click", handleEncrypt);
  decryptButton.addEventListener("click", handleDecrypt);
}


function handleEncrypt() {
  const inputText = textAreaElement.value;
  const encryptedText = encrypt(inputText);
  outputParagraphElement.innerText = encryptedText;
}


function handleDecrypt() {
  const inputText = textAreaElement.value;
  const decryptedText = decrypt(inputText);
  outputParagraphElement.innerText = decryptedText;
}


// Initialize the app when the DOM is ready
document.addEventListener("DOMContentLoaded", initialize);




// console.log(decrypt(encrypt('Este todo masa mushu')))