import { STRINGS } from "./src/constants.js";
import { decrypt, encrypt } from "./src/utils.js";

// Assign titles and strings
document.getElementById('page-title').innerText = STRINGS.TITLE;
document.getElementById('title').innerText = STRINGS.TITLE
document.getElementById('text-area-label').innerText = STRINGS.TEXT_AREA;

const textArea = document.getElementById('text-area');
textArea.placeholder = STRINGS.TEXT_AREA_PLACEHOLDER;

document.getElementById('output-paragraph-label').innerHTML = STRINGS.OUTPUT_LABEL;

const output = document.getElementById('output-paragraph');

// TODO: Get the input content to encrypt


// console.log(decrypt(encrypt('Este todo masa mushu')))