export default function usedLanguages(lyrics) {
  const regex = /^[\dа-яёА-ЯЁa-zA-Z.,!<>?`;:'"()@#-=_$%^&*\[\]\/{}\s]+$/
  const rus = /[а-яёА-ЯЁ]/
  const eng = /[a-zA-Z]/
  let hasRus = false
  let hasEng = false
  let hasOther = false

  lyrics.forEach((line, index) => {
    hasRus = hasRus || rus.test(line)
    hasEng = hasEng || eng.test(line)
    hasOther = hasOther || !regex.test(line)
  })
  const langs = { rus: false, eng: false, other: false }
  if (hasRus) langs.rus = true
  if (hasEng) langs.eng = true
  if (hasOther) langs.other = true
  return langs
}
