import { STRINGS } from "./src/constants.js";
import { copyToClipboard, decrypt, encrypt } from "./src/utils.js";

// Const and variables
const pageTitleElement = document.getElementById('page-title');
const titleElement = document.getElementById('title');
const textAreaLabelElement = document.getElementById('text-area-label');
const textAreaElement = document.getElementById('text-area');
const attentionMessageElement = document.getElementById('attention-message');
const emptyOutputContentContainer = document.getElementById('empty-output-container')
const emptyOutputLabelElement = document.getElementById('empty-output-label');
const emptyOutputDescElement = document.getElementById('empty-output-desc');
const outputParagraphElement = document.getElementById('output-paragraph');
const encryptButtonElement = document.getElementById('encrypt-button');
const decryptButtonElement = document.getElementById('decrypt-button');
const copyButtonElement = document.getElementById('copy-button');
const resultsContainer = document.getElementById('results');
const footerInfo = document.getElementById('footer-info');
const contactInfo = document.getElementById('contact');

// Assign values and listen events
function initialize() {
  // Assign titles and strings
  pageTitleElement.innerText = titleElement.innerText = STRINGS.TITLE;
  textAreaLabelElement.innerText = STRINGS.TEXT_AREA;
  attentionMessageElement.innerHTML = STRINGS.ATTENTION_MESSAGE;
  emptyOutputLabelElement.innerHTML = STRINGS.EMPTY_OUTPUT_LABEL_1;
  emptyOutputDescElement.innerHTML = STRINGS.EMPTY_OUTPUT_DESC;
  footerInfo.innerHTML = STRINGS.FOOTER_INFO;
  contactInfo.innerHTML = STRINGS.CONTACT_INFO;
  contactInfo.href = STRINGS.CONTACT_URL;

  // Assign buttons labels
  encryptButtonElement.innerHTML = STRINGS.ENCRYPT_BUTTON_LABEL;
  decryptButtonElement.innerHTML = STRINGS.DECRYPT_BUTTON_LABEL;
  copyButtonElement.innerHTML = STRINGS.COPY_BUTTON_LABEL;

  // Listen to button events
  encryptButtonElement.addEventListener("click", handleEncrypt);
  decryptButtonElement.addEventListener("click", handleDecrypt);
  copyButtonElement.addEventListener("click", handleCopy);
}

function showResults () {
  resultsContainer.style.display = "flex";
  resultsContainer.style.padding = "var(--padding-xl) 0";
}

function handleEncrypt() {
  const inputText = textAreaElement.value;
  const encryptedText = encrypt(inputText);
  outputParagraphElement.innerText = encryptedText;
  emptyOutputContentContainer.style.display = "none";
  showResults();
}


function handleDecrypt() {
  const inputText = textAreaElement.value;
  const decryptedText = decrypt(inputText);
  outputParagraphElement.innerText = decryptedText;
  emptyOutputContentContainer.style.display = "none";
  showResults();
}

function handleCopy() {
  copyToClipboard(outputParagraphElement);
};

// Initialize the app when the DOM is ready
document.addEventListener("DOMContentLoaded", initialize);
