import axios from "axios"
import cheerio from "cheerio"

const getPoems = async (q) => {
  const num = 10
  // const poemsData = await axios.get(
  //   `/api/rustih?url=https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_CSE_TOKEN}&q=${q}&cx=${process.env.GOOGLE_CX}&num=${num}`
  // )\
  // const q = "Николай Гумилев"
  const url = `api/rustih?q=${q}&num=${num}`
  let poemsData = await fetch(url).then((data) => data.json())
  // poemsData = poemsData.data
  const poemPromises = poemsData.items?.map(async (item) => {
    const link = item.link
    const { data } = await axios.get(`api/rustihPage?url=${link}`)
    const $ = cheerio.load(data)

    let flag = false
    const poem = {
      lyrics: [],
      name: $("h1").text(),
      img: item.pagemap.cse_thumbnail[0].src,
    }

    $('div[class="entry-content poem-text"] p').each((index, element) => {
      const $element = $(element)
      if ($element.find("ins.adsbygoogle").length) {
        flag = true
      }
      !flag && poem.lyrics.push($element.text().trim())
    })
    return poem
  })

  return Promise.all(poemPromises)
}
export default getPoems
