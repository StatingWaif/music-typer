import axios from "axios"
import cheerio from "cheerio"
// НАДО ЕЩЕ ИНФУ ОТТУДА
const getAuthorImg = async (authorLink) => {
  if (authorLink) {
    const authorPage = (await axios.get(`api/rustihPage?url=${authorLink}`))
      .data
    const $ = cheerio.load(authorPage)
    const src = $(`img.alignright`).attr("src")
    return src
  }
  return null
}
export default getAuthorImg
