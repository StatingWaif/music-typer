const formatLyrics = (lyrics) => {
  return lyrics
    .trim()
    .replaceAll(/\[.*?\]/g, "")
    .replaceAll(/  /g, " ")
    .replaceAll(/ +/g, " ")
    .replaceAll(/[«»“„]/g, '"')
    .replaceAll("’", "'")
    .replaceAll(/[–—]/g, "-")
    .replaceAll("…", "...")
    .replaceAll(/ ?\(.*\)/g, "")
}
export default formatLyrics
