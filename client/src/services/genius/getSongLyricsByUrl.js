import axios from "axios"
import cheerio from "cheerio"
import formatLyrics from "../../utils/formatLyrics"
export default async function getSongLyricsByUrl(url) {
  const requestUrl = `/api/genius?url=${url}`
  try {
    let { data } = await axios.get(requestUrl)
    const $ = cheerio.load(data)
    let lyrics = $('div[class="lyrics"]').text().trim()
    if (!lyrics) {
      lyrics = ""
      $('div[class^="Lyrics__Container"]').each((i, elem) => {
        if ($(elem).text().length !== 0) {
          let snippet = $(elem)
            .html()
            .replace(/<br>/g, "\n")
            .replace(/<(?!\s*br\s*\/?)[^>]+>/gi, "")
          lyrics += $("<textarea/>").html(snippet).text().trim() + "\n\n"
        }
      })
    }
    if (!lyrics) {
      return null
    }
    //еще квадратные штуки выдавать и в одном объекте
    return formatLyrics(lyrics)
  } catch (e) {
    console.error(e)
  }
}
