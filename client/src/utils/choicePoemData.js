import axios from "axios"
import cheerio from "cheerio"

export default async function choicePoemData(query) {
  const { data } = await axios.get(
    `/api/rustih?url=https://rustih.ru/search/?q=${query}`
    // { signal }
  )
  // .then((data) => data.json())
  const $ = cheerio.load(data)
  const thing = $("div.gsc-resultsbox-visible")
  return thing
}
