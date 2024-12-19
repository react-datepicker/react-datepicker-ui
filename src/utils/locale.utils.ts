export type LocaleKey =
  | "af"
  | "am"
  | "ar-dz"
  | "ar-iq"
  | "ar-kw"
  | "ar-ly"
  | "ar-ma"
  | "ar-sa"
  | "ar-tn"
  | "ar"
  | "az"
  | "be"
  | "bg"
  | "bi"
  | "bm"
  | "bn-bd"
  | "bn"
  | "bo"
  | "br"
  | "bs"
  | "ca"
  | "cs"
  | "cv"
  | "cy"
  | "de-at"
  | "da"
  | "de-ch"
  | "de"
  | "dv"
  | "el"
  | "en-au"
  | "en-ca"
  | "en-gb"
  | "en-ie"
  | "en-il"
  | "en-in"
  | "en-nz"
  | "en-sg"
  | "en-tt"
  | "eo"
  | "en"
  | "es-do"
  | "es-mx"
  | "es-pr"
  | "es-us"
  | "et"
  | "es"
  | "eu"
  | "fa"
  | "fo"
  | "fi"
  | "fr-ca"
  | "fr-ch"
  | "fr"
  | "fy"
  | "ga"
  | "gd"
  | "gom-latn"
  | "gl"
  | "gu"
  | "he"
  | "hi"
  | "hr"
  | "hu"
  | "ht"
  | "hy-am"
  | "id"
  | "is"
  | "it-ch"
  | "it"
  | "ja"
  | "jv"
  | "ka"
  | "kk"
  | "km"
  | "kn"
  | "ko"
  | "ku"
  | "ky"
  | "lb"
  | "lo"
  | "lt"
  | "lv"
  | "me"
  | "mi"
  | "mk"
  | "ml"
  | "mn"
  | "mr"
  | "ms-my"
  | "ms"
  | "mt"
  | "my"
  | "nb"
  | "ne"
  | "nl-be"
  | "nl"
  | "pl"
  | "pt-br"
  | "pt"
  | "rn"
  | "ro"
  | "ru"
  | "rw"
  | "sd"
  | "se"
  | "si"
  | "sk"
  | "sl"
  | "sq"
  | "sr-cyrl"
  | "ss"
  | "sv-fi"
  | "sr"
  | "sv"
  | "sw"
  | "ta"
  | "te"
  | "tet"
  | "tg"
  | "th"
  | "tk"
  | "tl-ph"
  | "tlh"
  | "tr"
  | "tzl"
  | "tzm-latn"
  | "tzm"
  | "ug-cn"
  | "uk"
  | "ur"
  | "uz-latn"
  | "uz"
  | "vi"
  | "x-pseudo"
  | "yo"
  | "zh-cn"
  | "zh-hk"
  | "zh-tw"
  | "zh"
  | "oc-lnc"
  | "nn"
  | "pa-in";

export const LocaleWeekends: Record<LocaleKey, number[]> = {
  af: [6, 0],
  am: [6, 0],
  "ar-dz": [5, 6],
  "ar-iq": [5, 6],
  "ar-kw": [5, 6],
  "ar-ly": [5, 6],
  "ar-ma": [6, 0],
  "ar-sa": [5, 6],
  "ar-tn": [6, 0],
  ar: [5, 6],
  az: [6, 0],
  be: [6, 0],
  bg: [6, 0],
  bi: [6, 0],
  bm: [6, 0],
  "bn-bd": [5, 6],
  bn: [6, 0],
  bo: [6, 0],
  br: [6, 0],
  bs: [6, 0],
  ca: [6, 0],
  cs: [6, 0],
  cv: [6, 0],
  cy: [6, 0],
  "de-at": [6, 0],
  da: [6, 0],
  "de-ch": [6, 0],
  de: [6, 0],
  dv: [5, 6],
  el: [6, 0],
  "en-au": [6, 0],
  "en-ca": [6, 0],
  "en-gb": [6, 0],
  "en-ie": [6, 0],
  "en-il": [5, 6],
  "en-in": [6, 0],
  "en-nz": [6, 0],
  "en-sg": [6, 0],
  "en-tt": [6, 0],
  eo: [6, 0],
  en: [6, 0],
  "es-do": [6, 0],
  "es-mx": [6, 0],
  "es-pr": [6, 0],
  "es-us": [6, 0],
  et: [6, 0],
  es: [6, 0],
  eu: [6, 0],
  fa: [5, 6],
  fo: [6, 0],
  fi: [6, 0],
  "fr-ca": [6, 0],
  "fr-ch": [6, 0],
  fr: [6, 0],
  fy: [6, 0],
  ga: [6, 0],
  gd: [6, 0],
  "gom-latn": [6, 0],
  gl: [6, 0],
  gu: [6, 0],
  he: [5, 6],
  hi: [6, 0],
  hr: [6, 0],
  hu: [6, 0],
  ht: [6, 0],
  "hy-am": [6, 0],
  id: [6, 0],
  is: [6, 0],
  "it-ch": [6, 0],
  it: [6, 0],
  ja: [6, 0],
  jv: [6, 0],
  ka: [6, 0],
  kk: [6, 0],
  km: [6, 0],
  kn: [6, 0],
  ko: [6, 0],
  ku: [6, 0],
  ky: [6, 0],
  lb: [6, 0],
  lo: [6, 0],
  lt: [6, 0],
  lv: [6, 0],
  me: [6, 0],
  mi: [6, 0],
  mk: [6, 0],
  ml: [6, 0],
  mn: [6, 0],
  mr: [6, 0],
  "ms-my": [6, 0],
  ms: [6, 0],
  mt: [6, 0],
  my: [6, 0],
  nb: [6, 0],
  ne: [6, 0],
  "nl-be": [6, 0],
  nl: [6, 0],
  pl: [6, 0],
  "pt-br": [6, 0],
  pt: [6, 0],
  rn: [6, 0],
  ro: [6, 0],
  ru: [6, 0],
  rw: [6, 0],
  sd: [6, 0],
  se: [6, 0],
  si: [6, 0],
  sk: [6, 0],
  sl: [6, 0],
  sq: [6, 0],
  "sr-cyrl": [6, 0],
  ss: [6, 0],
  "sv-fi": [6, 0],
  sr: [6, 0],
  sv: [6, 0],
  sw: [6, 0],
  ta: [6, 0],
  te: [6, 0],
  tet: [6, 0],
  tg: [6, 0],
  th: [6, 0],
  tk: [6, 0],
  "tl-ph": [6, 0],
  tlh: [6, 0],
  tr: [6, 0],
  tzl: [6, 0],
  "tzm-latn": [6, 0],
  tzm: [6, 0],
  "ug-cn": [6, 0],
  uk: [6, 0],
  ur: [6, 0],
  "uz-latn": [6, 0],
  uz: [6, 0],
  vi: [6, 0],
  "x-pseudo": [6, 0],
  yo: [6, 0],
  "zh-cn": [6, 0],
  "zh-hk": [6, 0],
  "zh-tw": [6, 0],
  zh: [6, 0],
  "oc-lnc": [6, 0],
  nn: [6, 0],
  "pa-in": [6, 0],
};
