import { STRINGS } from "./src/constants.js";
import { copyToClipboard, decrypt, encrypt } from "./src/utils.js";

// Const and variables
const pageTitleElement = document.getElementById('page-title');
const titleElement = document.getElementById('title');
const textAreaLabelElement = document.getElementById('text-area-label');
const textAreaElement = document.getElementById('text-area');
const emptyOutputContent = document.getElementById('empty-output-container')
const emptyOutputLabelElement = document.getElementById('empty-output-label');
const emptyOutputDescElement = document.getElementById('empty-output-desc');
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
  emptyOutputLabelElement.innerHTML = STRINGS.EMPTY_OUTPUT_LABEL_1;
  emptyOutputDescElement.innerHTML = STRINGS.EMPTY_OUTPUT_DESC;
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
  emptyOutputContent.style.display = "none";
  copyButton.style.display = "inherit";
}


function handleDecrypt() {
  const inputText = textAreaElement.value;
  const decryptedText = decrypt(inputText);
  outputParagraphElement.innerText = decryptedText;
  emptyOutputContent.style.display = "none";
  copyButton.style.display = "inherit";

}

function handleCopy() {
  copyToClipboard();
};

// Initialize the app when the DOM is ready
document.addEventListener("DOMContentLoaded", initialize);
