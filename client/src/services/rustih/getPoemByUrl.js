import axios from "axios"
import cheerio from "cheerio"
import getAuthorImg from "./getAuthorImg"
import formatLyrics from "../../utils/formatLyrics"

export default async function getPoemByUrl(link) {
  const { data } = await axios.get(`api/rustihPage?url=${link}`)
  const $ = cheerio.load(data)

  const authorLink = $('a[class="taxonomy post_tag"]').attr("href")

  const authorImg = await getAuthorImg(authorLink)

  let flag = false
  const poem = {
    lyrics: [],
    name: $("h1").text(),
    img: authorImg,
    link: link.replace("https://rustih.ru/", ""),
  }

  $('div[class="entry-content poem-text"] p').each((index, element) => {
    const $element = $(element)
    if ($element.find("ins.adsbygoogle").length) {
      flag = true
    }
    const line = formatLyrics($element.text())
    !flag && poem.lyrics.push(...line.split("\n"))
  })
  return poem
}
