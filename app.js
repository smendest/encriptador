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
const copyButton = document.getElementById('copy-button');
const footerInfo = document.getElementById('footer-info');


// Assign values and listen events
function initialize() {
  // Assign titles and strings
  pageTitleElement.innerText = titleElement.innerText = STRINGS.TITLE;
  textAreaLabelElement.innerText = STRINGS.TEXT_AREA;
  textAreaElement.placeholder = STRINGS.TEXT_AREA_PLACEHOLDER;
  outputParagraphLabelElement.innerHTML = STRINGS.OUTPUT_LABEL;
  footerInfo.innerHTML = STRINGS.FOOTER_INFO;

  // Assign buttons labels
  encryptButton.innerHTML = STRINGS.ENCRYPT_BUTTON_LABEL;
  decryptButton.innerHTML = STRINGS.DECRYPT_BUTTON_LABEL;
  copyButton.innerHTML = STRINGS.COPY_BUTTON_LABEL;

  // Listen to button events
  encryptButton.addEventListener("click", handleEncrypt);
  decryptButton.addEventListener("click", handleDecrypt);
  copyButton.addEventListener("click", handleCopy);
  copyButton.addEventListener("click", handleCopy);
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

function handleCopy() {
  // Verifyes if Clipboard API is available in the current browser
  if (navigator.clipboard) {
    // It copies the text from output paragraph to the clipboard
    const textToCopy = outputParagraphElement.innerText;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert(STRINGS.CLIPBOARD_SUCC);
      })
      .catch(err => {
        console.error(STRINGS.CLIPBOARD_ERR_1, err);
        alert(STRINGS.CLIPBOARD_ERR_2);
      });
  } else {
    alert(STRINGS.CLIPBOARD_API_NOT_AVAIL);
  }
};

// Initialize the app when the DOM is ready
document.addEventListener("DOMContentLoaded", initialize);
