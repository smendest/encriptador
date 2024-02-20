import { ENCRYPTION_KEYS, encrypting_regex, decrypting_regex, STRINGS } from "./constants.js";



/**
Requirements:
* Must work only with lowercase letters.
* No letters with accents or special characters should be used.
*/
export function encrypt(text) {


  let encryptedText = text.replace(encrypting_regex.regex_e, ENCRYPTION_KEYS.E);
  encryptedText = encryptedText.replace(encrypting_regex.regex_i, ENCRYPTION_KEYS.I);
  encryptedText = encryptedText.replace(encrypting_regex.regex_a, ENCRYPTION_KEYS.A);
  encryptedText = encryptedText.replace(encrypting_regex.regex_o, ENCRYPTION_KEYS.O);
  encryptedText = encryptedText.replace(encrypting_regex.regex_u, ENCRYPTION_KEYS.U);

  return encryptedText;
}

/**
 * The order of instructions is due to the ENCRYPTION_KEYS, if they change the order must be fixed.
 * This is because of some of the key have other vocals on them.
 */
export function decrypt(text) {

  let decrypted = text.replace(decrypting_regex.regex_u, 'u');
  decrypted = decrypted.replace(decrypting_regex.regex_o, 'o');
  decrypted = decrypted.replace(decrypting_regex.regex_a, 'a');
  decrypted = decrypted.replace(decrypting_regex.regex_i, 'i');
  decrypted = decrypted.replace(decrypting_regex.regex_e, 'e');


  return decrypted;

}

export function copyToClipboard() {
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
}