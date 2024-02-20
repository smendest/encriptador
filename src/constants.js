export const STRINGS = {
  TITLE: "Encriptador",
  TEXT_AREA: "Ingrese el texto aquí",
  TEXT_AREA_PLACEHOLDER: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis expedita molestiae non dicta illum voluptate tenetur quo, ullam numquam ipsa perspiciatis libero suscipit totam pariatur doloremque delectus commodi vel nisi.",
  EMPTY_OUTPUT_LABEL_1: "Ningún mensaje fue encontrado",
  EMPTY_OUTPUT_DESC: "Ingresa el texto que desees encriptar o desencriptar",
  TEST_TEXT: "Utilice JavaScript y todo lo que aprendio en las clases de logica de programacion para crear la funcion de encriptacion.",
  SECRET_MESSAGE: "fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!",
  ATTENTION_MESSAGE: "Solo letras minúsculas y sin acentos",
  ENCRYPT_BUTTON_LABEL: "Encriptar",
  DECRYPT_BUTTON_LABEL: "Desencriptar",
  COPY_BUTTON_LABEL: "Copiar",
  FOOTER_INFO: "Sebastian Mendes",
  CONTACT_INFO: "/sebastian-mendes-tello",
  CONTACT_URL: "https://www.linkedin.com/in/sebastian-mendes-tello",
  CLIPBOARD_SUCC: "¡Texto copiado al portapapeles!",
  CLIPBOARD_ERR_1: "Error al copiar el texto: ",
  CLIPBOARD_ERR_2: "Hubo un error al intentar copiar el texto.",
  CLIPBOARD_API_NOT_AVAIL: "La Clipboard API no está disponible en este navegador."
}

export const ENCRYPTION_KEYS = {
  A: "ai",
  E: "enter",
  I: "imes",
  O: "ober",
  U: "ufat",
}

export const encrypting_regex = {
  regex_a: /a/g,
  regex_e: /e/g,
  regex_i: /i/g,
  regex_o: /o/g,
  regex_u: /u/g,
}

export const decrypting_regex = {
  regex_a: RegExp(`\\${ENCRYPTION_KEYS.A}`, "g"),
  regex_e: RegExp(`\\${ENCRYPTION_KEYS.E}`, "g"),
  regex_i: RegExp(`\\${ENCRYPTION_KEYS.I}`, "g"),
  regex_o: RegExp(`\\${ENCRYPTION_KEYS.O}`, "g"),
  regex_u: RegExp(`\\${ENCRYPTION_KEYS.U}`, "g"),
}
