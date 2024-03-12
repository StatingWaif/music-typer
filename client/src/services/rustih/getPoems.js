import getPoemByUrl from "./getPoemByUrl"

const getPoems = async (q, signal) => {
  const num = 10
  const url = `api/rustih?q=${q}&num=${num}`
  let poemsData = await fetch(url, { signal }).then((data) => data.json())
  const poemPromises = poemsData.items?.map(async (item) => {
    const link = item.link
    const poem = await getPoemByUrl(link)
    if (!poem.img) {
      poem.img = item.pagemap.cse_thumbnail
        ? item.pagemap.cse_thumbnail[0].src
        : ""
    }
    return poem
  })
  return poemPromises
    ? (await Promise.all(poemPromises)).filter((poem) => poem.lyrics.length)
    : []
}
export default getPoems
