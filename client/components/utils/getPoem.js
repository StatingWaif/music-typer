import axios from "axios"
import cheerio from "cheerio"

export default async function getPoem(url) {
  const requestUrl = `/api/rustih?url=https://rustih.ru/nikolaj-gumilev-pamyat/`
  try {
    let { data } = await axios.get(requestUrl)
    const $ = cheerio.load(data)

    const lyrics = $("p")
      .text()
      .match(
        // /.+(?=(\(adsbygoogle = window\.adsbygoogle \|\| \[\]\)\.push\(\{\}\)))/
        /(.\n?)+(?=\(adsbygoogle = window\.adsbygoogle \|\| \[\]\)\.push\(\{\}\))/
      )[0]
      .trim()
    return lyrics
  } catch (e) {
    console.error(e)
  }
}
