export const STRINGS = {
  TITLE: "Encriptador",
  TEXT_AREA: "Ingrese el texto aquí",
  TEXT_AREA_PLACEHOLDER: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis expedita molestiae non dicta illum voluptate tenetur quo, ullam numquam ipsa perspiciatis libero suscipit totam pariatur doloremque delectus commodi vel nisi.",
  OUTPUT_LABEL: "Resultado:",
  TEST_TEXT: "Utilice JavaScript y todo lo que aprendio en las clases de logica de programacion para crear la funcion de encriptacion.",
  SECRET_MESSAGE: "fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!",
  ATTENTION_MESSAGE: "Solo letras minúsculas y sin acentos",
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
